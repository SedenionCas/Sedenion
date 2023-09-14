import { Excalidraw, THEME, useHandleLibrary } from "@excalidraw/excalidraw";
import { useEffect, useRef, useState } from "react";

import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import type ExcalidrawPlugin from "./ExcalidrawPlugin";
import type { SaveState } from "@/plugins/SaveManager";
import PluginEvent from "@/plugins/Event";

type ExcalidrawPluginProps = {
    plugin: ExcalidrawPlugin;
};

export default function ExcalidrawPanel({ plugin }: ExcalidrawPluginProps) {
    const index = useRef(plugin.getIndex() - 1);

    const [elements, setElements] = useState<readonly ExcalidrawElement[]>([]);
    const [appState, setAppState] = useState({});

    const [excalidrawAPI, setExcalidrawAPI] =
        useState<ExcalidrawImperativeAPI | null>(null);

    useHandleLibrary({ excalidrawAPI });

    useEffect(() => {
        const data: SaveState = {
            from: `${plugin.getPluginName()};${index.current}`,
            kind: "PANEL",
            data: {
                elements: JSON.stringify(elements),
                appState: JSON.stringify(appState),
            },
        };

        plugin.pluginStore.dispatchEvent(
            new PluginEvent("Save.request_save", JSON.stringify(data))
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elements, appState]);

    return (
        <div className="excalidraw-theme h-full w-full">
            <Excalidraw
                theme={THEME.DARK}
                onChange={(elements, appState) => {
                    setElements(elements);
                    setAppState(appState);
                }}
                // initialData={loadData(panelId.current)}
                ref={(api: ExcalidrawImperativeAPI) => setExcalidrawAPI(api)}
            />
        </div>
    );
}

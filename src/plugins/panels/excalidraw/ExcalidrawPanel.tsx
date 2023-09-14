import {
    Excalidraw,
    THEME,
    restore,
    useHandleLibrary,
} from "@excalidraw/excalidraw";
import { useEffect, useRef, useState } from "react";
import PluginEvent from "@/plugins/Event";

import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import type ExcalidrawPlugin from "./ExcalidrawPlugin";
import type { SaveState } from "@/plugins/SaveManager";
import type { RestoredDataState } from "@excalidraw/excalidraw/types/data/restore";
import SaveManager from "@/plugins/SaveManager";

function loadData(name: string): Promise<RestoredDataState> {
    return new Promise((resolve) => {
        const data = SaveManager.loadSaveState(`PANEL-${name}`) || {
            elements: [],
            appState: {
                viewBackgroundColor: "#0d0d0d",
                currentItemStrokeColor: "#ffffff",
            },
            files: []
        };
        
        const sceneData = restore(data as RestoredDataState, null, null);
        resolve(sceneData);
    });
}

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
        if (elements.length == 0) return;

        const data: SaveState = {
            from: `${plugin.getPluginName()};${index.current}`,
            kind: "PANEL",
            data: {
                elements: elements,
                appState: {
                    ...appState,
                    collaborators: undefined,

                },
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
                    console.log("change");
                    setElements(elements);
                    setAppState(appState);
                }}
                initialData={loadData(
                    `${plugin.getPluginName()};${index.current}`
                )}
                ref={(api: ExcalidrawImperativeAPI) => setExcalidrawAPI(api)}
            />
        </div>
    );
}

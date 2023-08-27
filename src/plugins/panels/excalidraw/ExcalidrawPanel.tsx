import { getAppState } from "@/store";
import {
    Excalidraw,
    THEME,
    restore,
    useHandleLibrary,
} from "@excalidraw/excalidraw";
import type { RestoredDataState } from "@excalidraw/excalidraw/types/data/restore";
import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { useEffect, useRef, useState } from "react";

function loadData(panelId: string): Promise<RestoredDataState> {
    return new Promise((resolve) => {
        const data = sessionStorage.getItem(panelId);
        if (data) {
            const parsed = JSON.parse(data);
            const sceneData = restore(parsed, null, null);
            resolve(sceneData);
        } else {
            const state = restore(
                {
                    appState: {
                        viewBackgroundColor: "#0d0d0d",
                        currentItemStrokeColor: "#ffffff",
                    },
                },
                null,
                null
            );

            resolve(state);
        }
    });
}

export default function ExcalidrawPanel() {
    const elementsRef = useRef<readonly ExcalidrawElement[]>([]);
    const appStateRef = useRef({});
    const panelId = useRef("");

    const [excalidrawAPI, setExcalidrawAPI] =
        useState<ExcalidrawImperativeAPI | null>(null);

    useHandleLibrary({ excalidrawAPI });

    useEffect(() => {
        if (panelId.current == "") {
            panelId.current = getAppState().api?.activePanel?.id || "noId";
        }

        return () => {
            if (
                elementsRef.current.length > 0 &&
                Object.keys(appStateRef.current).length > 0
            ) {
                const data = {
                    elements: elementsRef.current,
                    appState: {
                        ...appStateRef.current,
                        collaborators: undefined,
                    },
                };
                console.log("Teardown", data);

                sessionStorage.setItem(panelId.current, JSON.stringify(data));
            }
        };
    }, [panelId]);

    return (
        <div className="excalidraw-theme h-full w-full">
            <Excalidraw
                theme={THEME.DARK}
                onChange={(elements, appState) => {
                    elementsRef.current = elements;
                    appStateRef.current = appState;
                }}
                initialData={loadData(panelId.current)}
                ref={(api: ExcalidrawImperativeAPI) => setExcalidrawAPI(api)}
            />
        </div>
    );
}

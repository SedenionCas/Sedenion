import { Excalidraw, THEME } from "@excalidraw/excalidraw";

export default function ExcalidrawPanel() {
    return (
        <div className="excalidraw-theme h-full w-full">
            <Excalidraw
                theme={THEME.DARK}
                initialData={{
                    appState: {
                        viewBackgroundColor: "#0d0d0d",
                        currentItemStrokeColor: "#ffffff",
                    },
                }}
            />
        </div>
    );
}

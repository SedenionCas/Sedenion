import { Excalidraw } from "@excalidraw/excalidraw";

export default function ExcalidrawPanel() {
    return (
        <div className="excalidraw-theme w-full h-full">
            <Excalidraw theme="dark"/>
        </div>
    )
}
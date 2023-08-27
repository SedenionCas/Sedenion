import RenderWhenVisible from "@/util/RenderWhenVisible";
import { usePluginStore } from "react-pluggable";

export default function PanelBuilder() {
    const pluginStore = usePluginStore();
    const Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");

    return {
        Calculator: () => <Renderer placement="Calculator.display"/>,
        Cas: () => <Renderer placement="Cas.display"/>,
        Excalidraw: RenderWhenVisible(() => <Renderer placement="Excalidraw.display"/>),
    };
}

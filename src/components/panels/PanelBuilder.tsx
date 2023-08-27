import RenderWhenVisible from "@/util/RenderWhenVisible";
import { usePluginStore } from "react-pluggable";

export default function PanelBuilder() {
    const pluginStore = usePluginStore();
    const Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");

    return {
        basicCalc: () => <Renderer placement="Calculator.display"/>,
        cas: () => <Renderer placement="CAS.display"/>,
        excalidraw: RenderWhenVisible(() => <Renderer placement="Excalidraw.display"/>),
    };
}

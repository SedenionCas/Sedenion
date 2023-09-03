import { usePluginStore } from "react-pluggable";
import { PANEL_PLUGINS } from "./manifest";
import React from "react";
import RenderWhenVisible from "@/util/RenderWhenVisible";

import type { IDockviewPanelProps } from "dockview";


type PanelBuilderDict = {
    [key: string]:
        | (() => React.JSX.Element)
        | ((
              props: IDockviewPanelProps
          ) => React.FunctionComponentElement<IDockviewPanelProps> | null);
};

export default function PanelBuilder() {
    const pluginStore = usePluginStore();
    const Renderer = pluginStore.executeFunction(
        "Renderer.getRendererComponent"
    );

    const panels = PANEL_PLUGINS.reduce((acc, plugin) => {
        console.log(plugin.plugin.namespace);
        if (plugin.renderWhenVisible) {
            acc[plugin.name] = RenderWhenVisible(() => <Renderer placement={`${plugin.name}.display`} />);
        } else {
            acc[plugin.name] = () => <Renderer placement={`${plugin.name}.display`} />;
        }
        return acc;
    }, {} as PanelBuilderDict);

    console.log(panels);

    return panels;
}

import { usePluginStore } from "react-pluggable";
import { PANEL_PLUGINS } from "./manifest";
import React from "react";
import RenderWhenVisible from "@/util/RenderWhenVisible";

import type { IDockviewPanelProps } from "dockview";

export default function PanelBuilder() {
    const pluginStore = usePluginStore();
    const Renderer = pluginStore.executeFunction(
        "Renderer.getRendererComponent"
    );

    type PanelBuilderDict = {
        [key: string]:
            | (() => React.JSX.Element)
            | ((
                  props: IDockviewPanelProps
              ) => React.FunctionComponentElement<IDockviewPanelProps> | null);
    };

    const aaa = PANEL_PLUGINS.reduce((acc: PanelBuilderDict, plugin) => {
        if (plugin.renderWhenVisible) {
            acc[plugin.name] = RenderWhenVisible(() => (
                <Renderer placement={`${plugin.name}.display`} />
            ));
        } else {
            acc[plugin.name] = () => (
                <Renderer placement={`${plugin.name}.display`} />
            );
        }

        return acc;
    }, {});

    console.log(aaa);

    return aaa;
}

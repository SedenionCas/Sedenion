import type { Icon } from "@tabler/icons-react";
import type { PluginStore } from "react-pluggable";

import { PANEL_PLUGINS } from "./manifest";

type Plugin = {
    name: string;
    icon: Icon;
};

export function LoadPanelPlugins(pluginStore: PluginStore): Plugin[] {
    const plugins: { name: string; icon: Icon }[] = [];
    PANEL_PLUGINS.forEach((plugin) => {
        pluginStore.install(plugin.plugin);
        plugins.push({
            name: plugin.name,
            icon: plugin.plugin.icon,
        });
    });

    return plugins;
}

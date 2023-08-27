import { PANEL_PLUGINS } from "@/plugins/manifest";
import type { PluginStore } from "react-pluggable";

export function LoadPanelPlugins(pluginStore: PluginStore) {
    const pluginButtons = [];
    PANEL_PLUGINS.forEach((plugin) => {
        pluginStore.install(plugin.plugin);
        pluginButtons.push({
            name: plugin.name,
            icon: plugin.plugin.icon,
        });
    });
}

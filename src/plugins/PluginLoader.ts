import { PANEL_PLUGINS } from "./manifest";
import { getAppState } from "@/store";

import type { PluginStore } from "react-pluggable";
import type { PanelPluginManifest } from "sedenion-plugin-types";

export function LoadPanelPlugins(
    pluginStore: PluginStore
): PanelPluginManifest[] {
    const plugins: PanelPluginManifest[] = [];
    const appState = getAppState();
    PANEL_PLUGINS.forEach((plugin) => {
        if (
            !plugin.enabledByDefault ||
            !appState.enabledPlugins.has(plugin.name)
        )
            return;

        pluginStore.install(plugin.plugin);
        plugins.push(plugin);
    });

    return plugins;
}

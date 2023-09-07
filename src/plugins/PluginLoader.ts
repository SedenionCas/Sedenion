import { PANEL_PLUGINS } from "./manifest";
import { getAppState, setAppState } from "@/store";

import type { PluginStore } from "react-pluggable";
import type { PanelPluginManifest } from "sedenion-plugin-types";

export function LoadPanelPlugins(
    pluginStore: PluginStore
): PanelPluginManifest[] {
    const plugins: PanelPluginManifest[] = [];
    const enabledPlugins =
        localStorage.getItem("enabledPlugins") ||
        '["Calculator", "Excalidraw"]';
    const parsedPlugins: string[] = JSON.parse(enabledPlugins);
    const appState = getAppState();
    appState.enabledPlugins = new Set(parsedPlugins);
    setAppState(appState);

    PANEL_PLUGINS.forEach((plugin) => {
        if (!parsedPlugins.includes(plugin.name)) return;

        pluginStore.install(plugin.plugin);
        plugins.push(plugin);
    });

    return plugins;
}

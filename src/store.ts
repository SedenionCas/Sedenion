import Plausible from "plausible-tracker";

import type { EventOptions } from "plausible-tracker";
import type { DockviewApi } from "dockview";
import type { PlausibleOptions } from "plausible-tracker/build/main/lib/tracker";
import type { PanelPluginManifest } from "sedenion-plugin-types";

interface AppState {
    api: DockviewApi | null;
    plugins: PanelPluginManifest[];
    enabledPlugins: Set<string>;
    trackEvent: (
        eventName: string,
        options?: EventOptions,
        eventData?: PlausibleOptions
    ) => void;
}

let appState: AppState = {
    plugins: [],
    api: null,
    enabledPlugins: new Set(["Calculator", "Excalidraw"]),
    trackEvent: Plausible({
        domain: "sedenion.net",
    }).trackEvent,
};

export function getAppState(): AppState {
    return appState;
}

export function setAppState(state: AppState) {
    appState = state;
}

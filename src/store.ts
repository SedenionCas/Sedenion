import type { Icon } from "@tabler/icons-react";
import type { DockviewApi } from "dockview";
import type { PlausibleOptions } from "plausible-tracker/build/main/lib/tracker";
import Plausible, { type EventOptions } from "plausible-tracker";

interface AppState {
    api: DockviewApi | null;
    plugins: { name: string; icon: Icon }[];
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
    enabledPlugins: new Set(["Calculator", "Excalidraw", "Cas"]),
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

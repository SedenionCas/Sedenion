import { type DockviewApi } from "dockview";
import Plausible, { type EventOptions } from "plausible-tracker";
import type { PlausibleOptions } from "plausible-tracker/build/main/lib/tracker";

interface AppState {
    calculatorIndex: number;
    excalidrawIndex: number;
    api: DockviewApi | null;
    trackEvent: (
        eventName: string,
        options?: EventOptions,
        eventData?: PlausibleOptions
    ) => void;
}

let appState: AppState = {
    calculatorIndex: 1,
    excalidrawIndex: 1,
    api: null,
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

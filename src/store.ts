import type { Icon } from "@tabler/icons-react";
import type { DockviewApi } from "dockview";
import type { PlausibleOptions } from "plausible-tracker/build/main/lib/tracker";
import Plausible, { type EventOptions } from "plausible-tracker";

interface AppState {
    CalculatorIndex: number;
    ExcalidrawIndex: number;
    CasIndex: number;
    api: DockviewApi | null;
    plugins: { name: string; icon: Icon }[];
    trackEvent: (
        eventName: string,
        options?: EventOptions,
        eventData?: PlausibleOptions
    ) => void;
}

let appState: AppState = {
    CalculatorIndex: 1,
    CasIndex: 1,
    ExcalidrawIndex: 1,
    plugins: [],
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

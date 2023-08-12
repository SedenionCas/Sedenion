import { type DockviewApi } from "dockview";

interface AppState {
    calculatorIndex: number;
    excalidrawIndex: number;
    api: DockviewApi | null;
}

let appState: AppState = {
    calculatorIndex: 1,
    excalidrawIndex: 1,
    api: null,
};

export function getAppState(): AppState {
    return appState;
}

export function setAppState(state: AppState) {
    appState = state;
}

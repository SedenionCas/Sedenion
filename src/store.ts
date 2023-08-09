interface AppState {
    calculatorIndex: number;
    excalidrawIndex: number
}

let appState: AppState = {
    calculatorIndex: 1,
    excalidrawIndex: 1,
};

export function getAppState(): AppState {
    return appState;
}

export function setAppState(state: AppState) {
    appState = state;
}

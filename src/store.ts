interface AppState {
    calculatorIndex: number;
}

let appState: AppState = {
    calculatorIndex: 0,
};

export function getAppState(): AppState {
    return appState;
}

export function setAppState(state: AppState) {
    appState = state;
}

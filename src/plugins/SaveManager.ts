import type { IPlugin, PluginStore } from "react-pluggable";
import type PluginEvent from "./Event";

type SaveState = {
    kind: "VIEW" | "PANEL";
    from: string;
    data: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
    };
};

class SaveManager implements IPlugin {
    namespace = "save-manager";
    version = "0.0.0";
    pluginStore!: PluginStore;

    init(pluginStore: PluginStore): void {
        this.pluginStore = pluginStore;
    }
    getPluginName(): string {
        return `${this.namespace}@${this.version}`;
    }
    getDependencies(): string[] {
        return [];
    }

    activate(): void {
        this.pluginStore.addEventListener(
            "Save.request_save",
            this.requestSave
        );
    }

    deactivate(): void {
        this.pluginStore.removeEventListener(
            "Save.request_save",
            this.requestSave
        );
    }

    requestSave(event: PluginEvent): void {
        const state: SaveState = JSON.parse(event.data);
        localStorage.setItem(
            `save-${state.kind}-${state.from}`,
            JSON.stringify(state.data)
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static loadSaveState(name: string): {[key: string]: any} | null {
        const key = `save-${name}`;
        console.log("Loading save state", key);
        const state = localStorage.getItem(key);
        if (state) {
            return JSON.parse(state);
        }
        return null;
    }
}

export default SaveManager;
export type { SaveState };

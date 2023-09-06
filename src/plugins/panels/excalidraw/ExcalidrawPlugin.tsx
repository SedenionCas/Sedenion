import LazySuspense from "@/components/suspense/LazySuspense";
import { IconPencilBolt } from "@tabler/icons-react";
import React from "react";

import type { PluginStore } from "react-pluggable";
import type { IPanelPlugin, SettingSection } from "sedenion-plugin-types";

class ExcalidrawPlugin implements IPanelPlugin {
    namespace = "Excalidraw";
    version = "0.15.2";
    icon = IconPencilBolt;

    index: number = 1;
    pluginStore!: PluginStore;

    settings: SettingSection[] = [];

    getPluginName() {
        return `${this.namespace}@${this.version}`;
    }

    getDependencies() {
        return [];
    }

    init(pluginStore: PluginStore) {
        this.pluginStore = pluginStore;
    }

    activate() {
        this.pluginStore.addFunction(
            `${this.namespace}.add`,
            (a: number, b: number) => a + b
        );

        this.pluginStore.executeFunction(
            "Renderer.add",
            `${this.namespace}.display`,
            this.display
        );
    }

    deactivate() {
        this.pluginStore.removeFunction(`${this.namespace}.add`);
        this.pluginStore.removeFunction(`${this.namespace}.display`);
    }

    display(): React.JSX.Element {
        const LazyExcalidraw = React.lazy(() => import("./ExcalidrawPanel"));

        return (
            <LazySuspense>
                <LazyExcalidraw />
            </LazySuspense>
        );
    }

    incrementIndex(): void {
        this.index++;
    }

    getIndex(): number {
        return this.index;
    }
}

export default ExcalidrawPlugin;

export type PluginStoreExcalidraw = {
    executeFunction(functionName: "Calculator.activate"): void;
    executeFunction(functionName: "Calculator.deactivate"): void;
};

import LazySuspense from "@/components/suspense/LazySuspense";
import type IPanelPlugin from "@/types/PanelPlugin";
import { IconCalculator } from "@tabler/icons-react";
import React from "react";
import type { PluginStore } from "react-pluggable";

class CalculatorPlugin implements IPanelPlugin {
    namespace = "Calculator";
    version = "0.0.0";
    icon = IconCalculator;

    index: number = 1;
    pluginStore!: PluginStore;

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
        const LazyCalculator = React.lazy(() => import("./CalculatorPanel"));

        return (
            <LazySuspense>
                <LazyCalculator />
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

export default CalculatorPlugin;

export type PluginStoreCalculator = {
    executeFunction(functionName: "Calculator.activate"): void;
    executeFunction(functionName: "Calculator.deactivate"): void;
};

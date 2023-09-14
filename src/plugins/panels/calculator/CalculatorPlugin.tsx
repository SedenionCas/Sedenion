import LazySuspense from "@/components/suspense/LazySuspense";
import { IconCalculator } from "@tabler/icons-react";
import React from "react";
import { Setting } from "sedenion-plugin-types";

import type { PluginStore } from "react-pluggable";
import type { IPanelPlugin, SettingSection } from "sedenion-plugin-types";

class CalculatorPlugin implements IPanelPlugin {
    namespace = "Calculator";
    version = "0.0.0";
    icon = IconCalculator;

    settings: SettingSection[] = [
        {
            name: "Units",
            settings: [
                new Setting(
                    "Angle unit",
                    "Specify the unit of angle",
                    ["deg", "rad"],
                    "deg"
                ),
            ],
        },
    ];

    index: number = 1;
    pluginStore!: PluginStore;

    constructor() {
        this.display = this.display.bind(this);
    }

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
        this.pluginStore.executeFunction(
            "Renderer.add",
            `${this.namespace}.display`,
            this.display
        );
    }

    deactivate() {
        this.pluginStore.removeFunction(`${this.namespace}.display`);
    }

    display(): React.JSX.Element {
        const LazyCalculator = React.lazy(() => import("./CalculatorPanel"));

        return (
            <LazySuspense>
                <LazyCalculator plugin={this} />
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

import LazySuspense from "@/components/suspense/LazySuspense";
import { IconSquareRoot2 } from "@tabler/icons-react";
import React from "react";

import type { PluginStore } from "react-pluggable";
import type {IPanelPlugin, SettingSection} from "sedenion-plugin-types";

class CasPlugin implements IPanelPlugin {
    namespace = "Cas";
    version = "0.0.1";
    icon = IconSquareRoot2;
    
    settings: SettingSection[] = [];
    
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
        const LazyCas = React.lazy(() => import("./CasPanel"));

        return (
            <LazySuspense>
                <LazyCas />
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

export default CasPlugin;

export type PluginStoreCas = {
    executeFunction(functionName: "Calculator.activate"): void;
    executeFunction(functionName: "Calculator.deactivate"): void;
};

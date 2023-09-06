import LazySuspense from "@/components/suspense/LazySuspense";
import { IconPalette } from "@tabler/icons-react";
import React from "react";

import type { PluginStore } from "react-pluggable";
import type { IPanelPlugin, SettingSection } from "sedenion-plugin-types";

class ThemeTestPlugin implements IPanelPlugin {
    namespace = "ThemeTest";
    version = "0.0.0";
    icon = IconPalette;

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
        const LazyThemeTest = React.lazy(() => import("./ThemeTestPanel"));

        return (
            <LazySuspense>
                <LazyThemeTest />
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

export default ThemeTestPlugin;

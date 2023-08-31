import type { Icon } from "@tabler/icons-react";
import type React from "react";
import type { IPlugin } from "react-pluggable";
import type SettingSection from "./Setting";


interface IPanelPlugin extends IPlugin {
    readonly icon: Icon;

    readonly namespace: string;
    readonly version: string;
    readonly index: number;

    settings: SettingSection[];

    display(): React.JSX.Element;

    incrementIndex(): void;
    getIndex(): number;
}

export default IPanelPlugin;

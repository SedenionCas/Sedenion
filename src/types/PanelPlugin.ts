import type { Icon } from "@tabler/icons-react";
import type React from "react";
import type { IPlugin } from "react-pluggable";

interface IPanelPlugin extends IPlugin {
    readonly icon: Icon;

    readonly namespace: string;
    readonly version: string;
    readonly index: number;

    display(): React.JSX.Element;

    incrementIndex(): void;
    getIndex(): number;
}

export default IPanelPlugin;

import type IPanelPlugin from "@/types/PanelPlugin";
import CalculatorPlugin from "./calculator/CalculatorPlugin";
import ExcalidrawPlugin from "./excalidraw/ExcalidrawPlugin";
import CasPlugin from "./cas/CasPlugin";

type PanelPlugin = {
    name: string;
    version: string;
    plugin: IPanelPlugin;
    enabledByDefault: boolean;
    authors?: Author[];
};

type Author = {
    name: string;
    profile: string;
};

export const PANEL_PLUGINS: PanelPlugin[] = [
    {
        name: "Calculator",
        version: "1.0.0",
        plugin: new CalculatorPlugin(),
        enabledByDefault: true,
        authors: [
            {
                name: "Anto Keinänen",
                profile: "https://github.com/antoKeinanen",
            },
        ],
    },
];

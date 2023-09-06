import type { IPanelPlugin } from "sedenion-plugin-types";
import CalculatorPlugin from "./panels/calculator/CalculatorPlugin";
import CasPlugin from "./panels/cas/CasPlugin";
import ExcalidrawPlugin from "./panels/excalidraw/ExcalidrawPlugin";
import { COMMUNITY_PANEL_PLUGINS } from "sedenion-plugins";
import ThemeTestPlugin from "./panels/themetest/ThemeTestPlugin";

type PanelPlugin = {
    name: string;
    version: string;
    plugin: IPanelPlugin;
    enabledByDefault: boolean;
    renderWhenVisible?: boolean;
    authors: Author[];
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
    {
        name: "Excalidraw",
        version: "0.15.2",
        plugin: new ExcalidrawPlugin(),
        enabledByDefault: true,
        renderWhenVisible: true,
        authors: [
            {
                name: "Excalidraw Team",
                profile: "https://github.com/excalidraw",
            },
            {
                name: "Anto Keinänen",
                profile: "https://github.com/antoKeinanen",
            },
        ],
    },
    {
        name: "Cas",
        version: "0.0.1",
        plugin: new CasPlugin(),
        enabledByDefault: true,
        authors: [
            {
                name: "Anto Keinänen",
                profile: "https://github.com/antoKeinanen",
            },
        ],
    },
    {
        name: "ThemeTest",
        version: "0.0.0",
        plugin: new ThemeTestPlugin(),
        enabledByDefault: false,
        authors: [
            {
                name: "Sedenion Team",
                profile: "https://github.com/SedenionCas", 
            },
        ],
    },
    ...COMMUNITY_PANEL_PLUGINS,
];

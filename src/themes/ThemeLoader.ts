import { base, catppuccinMocha, gruvbox, nord, oneLight } from "./BaseThemes";

import type { IMappedTheme, ITheme, IThemes } from "./Theme";

const DEFAULT_THEME = "Base";

export const themes: IThemes = {
    Base: base,
    Catppuccin: catppuccinMocha,
    "One Light": oneLight,
    Nord: nord,
    Gruvbox: gruvbox,
};

function mapTheme(theme: ITheme): IMappedTheme {
    return {
        "--surface-1": theme.surface1,
        "--surface-2": theme.surface2,
        "--surface-3": theme.surface3,
        "--primary-light": theme.primaryLight,
        "--primary": theme.primary,
        "--primary-dark": theme.primaryDark,
        "--text-1": theme.text1,
        "--text-2": theme.text2,
        "--border": theme.border,
        "--success": theme.success,
        "--warning": theme.warning,
        "--error": theme.error,
        "--info": theme.info,
    };
}

export function applyTheme(themeName: string) {
    const theme = themes[themeName];
    let themeObject: IMappedTheme;
    if (theme) {
        themeObject = mapTheme(theme);
        localStorage.setItem("theme", themeName);
    } else {
        themeObject = mapTheme(themes[DEFAULT_THEME]);
        localStorage.setItem("theme", DEFAULT_THEME);
    }

    const root = document.documentElement;

    Object.keys(themeObject).forEach((property) => {
        root.style.setProperty(property, themeObject[property]);
    });
}

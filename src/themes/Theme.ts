export interface ITheme {
    surface1: string;
    surface2: string;
    surface3: string;
    primaryLight: string;
    primary: string;
    primaryDark: string;
    text1: string;
    text2: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    info: string;
}

export interface IThemes {
    [key: string]: ITheme
}

export interface IMappedTheme {
    [key: string]: string
}
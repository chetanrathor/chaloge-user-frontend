export const THEMES_MODE = {
    LIGHT: 'light',
    DARK: 'dark',
}

export type ThemeMode = typeof THEMES_MODE[keyof typeof THEMES_MODE]
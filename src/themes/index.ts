import light from './light';
import dark from './dark';

export const themes = {
  light,
  dark,
};

export const themeKeys = {
  light: 'light' as const,
  dark: 'dark' as const,
};

export type IThemes = keyof typeof themes;
export type ITheme = typeof themes[keyof typeof themes];

export const mapTheme = (variables) => {
  return {
    '--text-primary': variables.textPrimary || '',
    '--text-secondary': variables.textSecondary || '',
    '--bg-primary': variables.bgPrimary || '',
    '--bg-secondary': variables.bgSecondary || '',
    '--color-main': variables.main || '',
  };
};

export const applyTheme = (themeKey: IThemes) => {
  const themeObject = mapTheme(themes[themeKey]);
  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    root.style.setProperty(property, themeObject[property]);
  });
};

const getBrowserTheme = (): IThemes => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? themeKeys.dark
    : themeKeys.light;
};

export const getCurrentThemeKey = (): IThemes => {
  return (
    (typeof window !== 'undefined' &&
      (window.localStorage.getItem('theme') as IThemes)) ||
    getBrowserTheme()
  );
};

export const getCurrentTheme = () => themes[getCurrentThemeKey()];
export const getThemeByKey = (key: IThemes) => themes[key];

export const changeTheme = (themeKey: IThemes) => {
  typeof window !== 'undefined' &&
    window.localStorage.setItem('theme', themeKey);
  applyTheme(themeKey);
};

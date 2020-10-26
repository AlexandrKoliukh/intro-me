import light from './light';
import dark from './dark';

export const themes = {
  light,
  dark,
};

export type IThemes = keyof typeof themes;
export type ITheme = typeof themes[keyof typeof themes];

export const mapTheme = (variables) => {
  return {
    '--color-primary': variables.primary || '',
    '--color-secondary': variables.secondary || '',
    '--color-text-primary': variables.textPrimary || '',
    '--bg-primary': variables.backgroundPrimary || '',
    '--bg-secondary': variables.backgroundSecondary || '',
  };
};

export const applyTheme = (theme: IThemes) => {
  const themeObject = mapTheme(themes[theme]);
  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    root.style.setProperty(property, themeObject[property]);
  });
};

const getBrowserTheme = (): IThemes => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const getCurrentThemeKey = (): IThemes => {
  return (localStorage.getItem('theme') as IThemes) || getBrowserTheme();
};

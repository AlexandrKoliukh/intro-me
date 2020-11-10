import { getCurrentTheme, themeKeys } from '@themes/index';
import { createContext } from 'react';

export const getInitialThemeValue = () => {
  const theme = getCurrentTheme();
  return {
    isDark: theme.key === themeKeys.dark,
    toggle: () => {},
    theme,
  };
};

export const ThemeContext = createContext(getInitialThemeValue());

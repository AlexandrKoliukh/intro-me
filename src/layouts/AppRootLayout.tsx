import { Header } from '@components/Header';
import { SEO } from '@components/SEO';
import { ThemeContext } from '@lib/contexts';
import {
  changeTheme,
  getCurrentThemeKey,
  getThemeByKey,
  themeKeys,
} from '@themes/index';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

interface IProps {}

export const AppRootLayout: FC<IProps> = (props) => {
  const [themeKey, setThemeKey] = useState(getCurrentThemeKey);

  useEffect(() => {
    changeTheme(themeKey);
  }, [themeKey]);

  const themeValue = useMemo(() => {
    const theme = getThemeByKey(themeKey);
    const isDark = theme.key === themeKeys.dark;
    const toggle = () => {
      setThemeKey(isDark ? themeKeys.light : themeKeys.dark);
    };
    return {
      theme,
      isDark,
      toggle,
    };
  }, [themeKey]);

  return (
    <>
      <SEO />
      <ThemeContext.Provider value={themeValue}>
        <StyledProvider theme={themeValue.theme}>
          <main>{props.children}</main>
        </StyledProvider>
      </ThemeContext.Provider>
    </>
  );
};

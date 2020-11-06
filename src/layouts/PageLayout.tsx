import React, { FC } from 'react';
import { Header } from '@components/Header';
import { SEO } from '@components/SEO';
import { useTheme } from '@lib/hooks';
import { ThemeProvider } from 'styled-components';

export const PageLayout = (props) => {
  const [theme] = useTheme();

  return (
    <div>
      <SEO />
      <Header />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </div>
  );
};

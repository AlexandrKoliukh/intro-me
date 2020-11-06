import React, { FC } from 'react';
import { Header } from '@components/Header';
import { SEO } from '@components/SEO';
import { useTheme } from '@lib/hooks';
import { ThemeProvider } from 'styled-components';

interface IProps {}

export const AppLayout: FC<IProps> = (props) => {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <Header />
      {props.children}
    </ThemeProvider>
  );
};

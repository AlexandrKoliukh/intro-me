import React, { FC } from 'react';
import { Header } from '@components/Header';
import { SEO } from '@components/SEO';
import { useTheme } from '@lib/hooks';
import { ThemeProvider } from 'styled-components';

export const PageLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

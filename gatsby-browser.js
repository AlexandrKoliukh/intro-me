import React from 'react';
import { AppRootLayout } from './src/layouts/AppRootLayout';

import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

import './src/styles/global.css';

export const wrapRootElement = ({ element }) => {
  return <AppRootLayout>{element}</AppRootLayout>;
};

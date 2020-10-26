import React, { FC } from 'react';
import { applyTheme, getCurrentThemeKey } from '../themes';

interface IProps {}

const AppLayout: FC<IProps> = (props) => {
  return <div>{props.children}</div>;
};

export default AppLayout;

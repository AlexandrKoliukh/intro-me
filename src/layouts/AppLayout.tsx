import React, { FC } from 'react';
import { SEO } from '../components/SEO';

interface IProps {}

export const AppLayout: FC<IProps> = (props) => {
  return (
    <div>
      <SEO />
      {props.children}
    </div>
  );
};

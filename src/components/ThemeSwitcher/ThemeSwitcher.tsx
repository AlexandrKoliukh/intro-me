import { ThemeContext } from '@lib/contexts';
import { getDiagonal } from '@lib/utils';
import React, { FC, useContext, useEffect, useRef } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import classes from './style.module.css';

interface IProps {}

export const ThemeSwitcher: FC<IProps> = (props) => {
  const { toggle, isDark } = useContext(ThemeContext);
  const ref = useRef(null);

  useEffect(() => {
    if (ref !== null) {
      const diagonal = getDiagonal();
      ref.current.style.setProperty('--diagonal', `${diagonal}px`);
    }
  }, [ref]);

  const handleToggleTheme = () => {
    toggle();
  };

  return (
    <div
      ref={ref}
      onClick={handleToggleTheme}
      className={isDark ? classes.activeWave : classes.wave}
    >
      {isDark ? <BsSun /> : <BsMoon />}
    </div>
  );
};

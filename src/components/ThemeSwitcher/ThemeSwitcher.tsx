import { useTheme } from '@lib/hooks';
import { getDiagonal } from '@lib/utils';
import React, { FC, useEffect, useRef } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { themeKeys } from '../../themes';
import classes from './style.module.css';

interface IProps {}

export const ThemeSwitcher: FC<IProps> = (props) => {
  const [theme, setTheme] = useTheme();
  const ref = useRef(null);

  useEffect(() => {
    if (ref !== null) {
      const diagonal = getDiagonal();
      ref.current.style.setProperty('--diagonal', `${diagonal}px`);
    }
  }, [ref]);

  const handleToggleTheme = () => {
    setTheme(isDarkTheme ? themeKeys.light : themeKeys.dark);
  };

  const isDarkTheme = theme.key === themeKeys.dark;
  return (
    <div
      ref={ref}
      onClick={handleToggleTheme}
      className={isDarkTheme ? classes.activeWave : classes.wave}
    >
      {isDarkTheme ? <BsSun /> : <BsMoon />}
    </div>
  );
};

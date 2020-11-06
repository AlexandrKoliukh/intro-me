import { useTheme } from '@lib/hooks';
import React, { FC } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { themeKeys } from '../../themes';
import classes from './style.module.css';

interface IProps {}

export const ThemeSwitcher: FC<IProps> = (props) => {
  const [theme, setTheme] = useTheme();

  const handleToggleTheme = () => {
    setTheme(isDarkTheme ? themeKeys.light : themeKeys.dark);
  };

  const isDarkTheme = theme.key === themeKeys.dark;
  return (
    <div
      onClick={handleToggleTheme}
      className={isDarkTheme ? classes.activeWave : classes.wave}
    >
      {isDarkTheme ? <BsSun /> : <BsMoon />}
    </div>
  );
};

import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import {
  changeTheme,
  getCurrentThemeKey,
  getThemeByKey,
  ITheme,
} from '../themes';

export const useTheme = () => {
  const [themeKey, setThemeKey] = useState(getCurrentThemeKey);

  const theme = useMemo(() => {
    changeTheme(themeKey);
    return getThemeByKey(themeKey);
  }, [themeKey]);

  return [theme, setThemeKey] as [
    ITheme,
    Dispatch<SetStateAction<'light' | 'dark'>>
  ];
};

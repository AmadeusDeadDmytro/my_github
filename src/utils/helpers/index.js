import { DARK_THEME, DARK_BLUE_THEME, LIGHT_THEME } from '../../themes';
import type { Theme } from '../types';

export const isNight = () => {
  const hours = (new Date()).getHours();
  console.log(hours)
  //return hours >= 18 || hours <= 6;
  return hours > 0;
};

export const loadTheme = (theme: Theme) => {
  switch (theme) {
    case 'light': return LIGHT_THEME;
    case 'dark': return DARK_THEME;
    case 'dark-blue': return DARK_BLUE_THEME;
    default: return isNight() ? DARK_THEME : LIGHT_THEME;
  }
};

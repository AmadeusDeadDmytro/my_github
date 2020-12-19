import { DARK_THEME, LIGHT_THEME } from '../themes';
import type { Theme } from './types';

export const isNight = () => {
  const hours = (new Date()).getHours();
  return hours >= 18 || hours <= 6;
};

export const loadTheme = (theme: Theme) => {
  switch (theme) {
    case 'light': return LIGHT_THEME;
    case 'dark': return DARK_THEME;
    default: return isNight() ? DARK_THEME : LIGHT_THEME;
  }
};

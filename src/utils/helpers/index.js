import themes, { DARK_THEME, LIGHT_THEME } from '../../styles/themes';
import type { Theme } from '../types';

export const isNight = () => {
  const hours = (new Date()).getHours();
  console.log(hours)
  return hours >= 18 || hours <= 6;
};

export const loadTheme = (theme: Theme) => {
  if(theme && themes[theme]) return themes[theme]
  return isNight() ? DARK_THEME : LIGHT_THEME
};

import warna from 'warna';
import base from './base';

export const base16 = {
  theme: 'light',
  isDark: false,
  base00: '#f7f7f5', // фон страницы
  base01: '#ccccca', // фон карточки -1
  base02: '#ffffff', // фон карточки 0
  base03: '#f7f7f5', // фон карточки +1
  base04: '#222222', // цвет
  base05: warna.lighten('#222222', 0.6).hex, // muted color,
  base06: undefined,
  base07: base.brand, // brand 1
  base08: base.brandSecondary, // brand 2
  base09: undefined, // звезда
  base0A: undefined,
  base0B: undefined,
  base0C: undefined,
  base0D: undefined,
  base0E: undefined,
  base0F: undefined,
  star: '#edb800'
};

export default {
  ...base,
  theme: 'dark',
  isDark: true,
  ...base16
}

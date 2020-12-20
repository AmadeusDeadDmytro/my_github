import warna from 'warna';
import base from './base';

export const base16 = {
  base00: '#111111', // фон страницы
  base01: '#111111', // фон карточки -1
  base02: '#1c1c1c', // фон карточки 0
  base03: '#353535', // фон карточки +1
  base04: '#a7a7a7', // текст (заглушить, opacity 0.9 = #666666, #888888
  base05: warna.darken('#a7a7a7', 0.6).hex, // muted color
  base06: undefined,
  base07: base.brandSecondary, // brand 1
  base08: base.brand, // brand 2
  base09: undefined, // звезда
  base0A: undefined,
  base0B: undefined,
  base0C: undefined,
  base0D: undefined,
  base0E: undefined,
  base0F: undefined,
};

export default {
  ...base,
  theme: 'dark',
  isDark: true,
  ...base16
}

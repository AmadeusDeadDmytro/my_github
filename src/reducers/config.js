import { combineReducers } from 'redux';

import { SET_THEME } from '../utils/constants/actions';
import { DEFAULT_THEME } from '../utils/constants/defaults';
import type { Action, Config, Theme } from '../utils/types';
import {loadTheme as _loadTheme} from "../utils/helpers";

const themeReducer = (state: Theme = DEFAULT_THEME, { type, payload } :Action<Theme>): Theme => {
  switch (type) {
    case SET_THEME: return payload;
    default: return state;
  }
};

export default combineReducers({
  themeReducer,
});

export const loadTheme = ({ theme }: Config) => {
  return _loadTheme(theme)
}

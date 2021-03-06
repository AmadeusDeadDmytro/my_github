// @flow

import {SET_THEME} from "../utils/constants/actions";
import type { Action, ActionType, Theme } from '../utils/types';

function action<T>(type: ActionType, payload: T): Action<T> {
  return { type, payload };
}

export const setTheme = (theme: Theme) => action(SET_THEME, theme);

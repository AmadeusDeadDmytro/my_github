import { REHYDRATE } from 'redux-persist/lib/constants'

import {loadTheme} from "../utils/helpers";
import {DEFAULT_THEME} from "../utils/constants/defaults";
import type {Action, State, Theme} from "../utils/types";
import {SET_THEME} from "../utils/constants/actions";

export const defaultState = loadTheme(DEFAULT_THEME)

export default (state = defaultState, {type, payload}: Action<State> | Theme) => {
    switch (type) {
        case SET_THEME: return loadTheme(payload)
        case REHYDRATE: return loadTheme(((payload || {}).config || {}).theme)
        default: return state
    }
}
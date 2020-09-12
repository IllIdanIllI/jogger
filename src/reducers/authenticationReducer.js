import {
    AUTHENTICATION,
    LOG_OUT,
    RE_AUTHENTICATION,
    TOGGLE_LOADER,
} from '../constants/types';
import { TOKEN } from '../constants/constants';

const initialState = {
    isAuthenticated: localStorage.getItem(TOKEN) ? true : false,
    isLoading: true,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case AUTHENTICATION:
            localStorage.setItem(TOKEN, payload);
            return {
                ...state,
                isAuthenticated: true,
            };
        case RE_AUTHENTICATION:
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOG_OUT:
            localStorage.removeItem(TOKEN);
            return {
                ...state,
                isAuthenticated: false,
            };
        case TOGGLE_LOADER:
            return {
                ...state,
                isLoading: payload,
            };
        default:
            return state;
    }
};

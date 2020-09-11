import { AUTHENTICATION, LOG_OUT, RE_AUTHENTICATION } from '../constants/types';
import { TOKEN } from '../constants/constants';

const initialState = {
    isAuthenticated: localStorage.getItem(TOKEN) ? true : false,
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
        default:
            return state;
    }
};

import { AUTHENTICATION, LOG_OUT } from '../constants/types';
import { TOKEN } from '../constants/constants';

const initialState = {
    token: localStorage.getItem(TOKEN),
    isAuthenticated: false,
    errorMessage: '',
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case AUTHENTICATION:
            localStorage.setItem(TOKEN, payload);
            return {
                ...state,
                token: payload,
                isAuthenticated: true,
            };
        case LOG_OUT:
            localStorage.removeItem(TOKEN);
            return {
                ...state,
                token: null,
                isAuthenticated: false,
            };
        default:
            return { ...state };
    }
};

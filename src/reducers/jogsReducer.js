import { RECEIVE_JOGS, ADD_JOG } from '../constants/types';

const initialState = {
    jogs: [],
    users: [],
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case RECEIVE_JOGS:
            const { jogs, users } = payload;
            return {
                ...state,
                jogs,
                users,
            };
        // case RE_AUTHENTICATION:
        //     return {
        //         ...state,
        //         token: payload,
        //         isAuthenticated: true,
        //     };
        // case LOG_OUT:
        //     localStorage.removeItem(TOKEN);
        //     return {
        //         ...state,
        //         token: null,
        //         isAuthenticated: false,
        //     };
        default:
            return { ...state };
    }
};

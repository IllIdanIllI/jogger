import { RECEIVE_JOGS, TOGGLE_FILTER, TOGGLE_LOADER } from '../constants/types';

const initialState = {
    jogs: [],
    users: [],
    isFilterActive: false,
    isLoading: true,
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
        case TOGGLE_FILTER:
            return {
                ...state,
                isFilterActive: payload,
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

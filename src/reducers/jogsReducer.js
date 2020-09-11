import { RECEIVE_JOGS, SET_JOGS, TOGGLE_FILTER } from '../constants/types';

const initialState = {
    jogs: [],
    users: [],
    isFilterActive: false,
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
        default:
            return state;
    }
};

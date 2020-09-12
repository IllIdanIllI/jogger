import axiosInstance from './axios';
import { AUTH_URL } from '../constants/constants';
import { AUTHENTICATION, LOG_OUT, RE_AUTHENTICATION, TOGGLE_LOADER } from '../constants/types';

const toggleLoader = (flag) => ({
    type: TOGGLE_LOADER,
    payload: flag,
});

export const authenticate = () => (dispatch) => {
    dispatch(toggleLoader(true));
    const body = JSON.stringify({ uuid: 'hello' });
    axiosInstance.post(`${AUTH_URL}/uuidLogin`, body).then((response) => {
        dispatch({
            type: AUTHENTICATION,
            payload: response.data.response.access_token,
        });
        dispatch(toggleLoader(false));
    });
};

export const reAuthenticate = (token) => (dispatch) => {
    dispatch({
        type: RE_AUTHENTICATION,
        payload: token,
    });
};

export const logOut = () => (dispatch) => {
    dispatch({
        type: LOG_OUT,
    });
};

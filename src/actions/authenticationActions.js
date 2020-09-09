import axiosInstance from './axios';
import { AUTH_URL } from '../constants/constants';
import { AUTHENTICATION, LOG_OUT } from '../constants/types';

export const authenticate = () => (dispatch) => {
    const body = JSON.stringify({ uuid: 'hello' });
    axiosInstance.post(`${AUTH_URL}/uuidLogin`, body).then((response) =>
        dispatch({
            type: AUTHENTICATION,
            payload: response.data.response.access_token,
        })
    );
};

export const logOut = () => (dispatch) => {
    dispatch({
        type: LOG_OUT,
    });
};

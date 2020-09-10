import axiosInstance, { authorizationHeader } from './axios';
import { DATA_URL, TOKEN, JOGS_URL } from '../constants/constants';
import { RECEIVE_JOGS, ADD_JOG } from '../constants/types';

export const receiveJogs = () => (dispatch) => {
    const token = localStorage.getItem(TOKEN);
    axiosInstance
        .get(`${DATA_URL}/sync`, {
            headers: { Authorization: authorizationHeader(token) },
        })
        .then((response) =>
            dispatch({
                type: RECEIVE_JOGS,
                payload: response.data.response,
            })
        );
};

export const addJogs = (jog) => async (dispatch) => {
    const token = localStorage.getItem(TOKEN);
    const body = JSON.stringify(jog);
    await axiosInstance.post(`${DATA_URL}/jog`, body, {
        headers: { Authorization: authorizationHeader(token) },
    });
};

// export const reAuthenticate = (token) => (dispatch) => {
//     dispatch({
//         type: RE_AUTHENTICATION,
//         payload: token,
//     });
// };

// export const logOut = () => (dispatch) => {
//     dispatch({
//         type: LOG_OUT,
//     });
// };

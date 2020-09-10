import axiosInstance, { authorizationHeader } from './axios';
import { DATA_URL, TOKEN } from '../constants/constants';
import { RECEIVE_JOGS } from '../constants/types';

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

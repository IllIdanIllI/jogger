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

export const addJog = (jog) => async (dispatch) => {
    const token = localStorage.getItem(TOKEN);
    const body = JSON.stringify(jog);
    await axiosInstance.post(`${DATA_URL}/jog`, body, {
        headers: { Authorization: authorizationHeader(token) },
    });
};

export const updateJog = (jog) => async (dispatch) => {
    const token = localStorage.getItem(TOKEN);
    const body = JSON.stringify(jog);
    await axiosInstance.put(`${DATA_URL}/jog`, body, {
        headers: { Authorization: authorizationHeader(token) },
    });
};

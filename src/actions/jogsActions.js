import axiosInstance, { authorizationHeader } from './axios';
import { DATA_URL, TOKEN } from '../constants/constants';
import { RECEIVE_JOGS, TOGGLE_FILTER } from '../constants/types';
import { dateFromTimestampToInput } from '../service/dataService';

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

export const setJogs = (dateTo, dateFrom) => (dispatch) => {
    const token = localStorage.getItem(TOKEN);
    axiosInstance
        .get(`${DATA_URL}/sync`, {
            headers: { Authorization: authorizationHeader(token) },
        })
        .then((response) => {
            const payload = response.data.response;
            payload.jogs = payload.jogs.filter(
                (jog) =>
                    dateFromTimestampToInput(jog.date) <= dateTo &&
                    dateFromTimestampToInput(jog.date) >= dateFrom
            );
            dispatch({
                type: RECEIVE_JOGS,
                payload: response.data.response,
            });
        });
};

export const toggleFilter = (state) => (dispatch) => {
    dispatch({
        type: TOGGLE_FILTER,
        payload: !state,
    });
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

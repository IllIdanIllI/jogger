import axiosInstance, { authorizationHeader } from './axios';
import { DATA_URL, TOKEN } from '../constants/constants';
import { RECEIVE_JOGS, TOGGLE_FILTER, TOGGLE_LOADER } from '../constants/types';
import { dateFromTimestampToInput } from '../service/dataService';

const toggleLoader = (flag) => ({
    type: TOGGLE_LOADER,
    payload: flag,
});

export const receiveJogs = () => (dispatch) => {
    dispatch(toggleLoader(true));
    const token = localStorage.getItem(TOKEN);
    axiosInstance
        .get(`${DATA_URL}/sync`, {
            headers: { Authorization: authorizationHeader(token) },
        })
        .then((response) => {
            dispatch({
                type: RECEIVE_JOGS,
                payload: response.data.response,
            });
            dispatch(toggleLoader(false));
        });
};

export const setJogs = (dateTo, dateFrom) => (dispatch) => {
    dispatch(toggleLoader(true));
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
            dispatch(toggleLoader(false));
        });
};

export const toggleFilter = (state) => (dispatch) => {
    dispatch({
        type: TOGGLE_FILTER,
        payload: !state,
    });
};

export const addJog = (jog) => async (dispatch) => {
    dispatch(toggleLoader(true));
    const token = localStorage.getItem(TOKEN);
    const body = JSON.stringify(jog);
    await axiosInstance.post(`${DATA_URL}/jog`, body, {
        headers: { Authorization: authorizationHeader(token) },
    });
    dispatch(toggleLoader(false));
};

export const updateJog = (jog) => async (dispatch) => {
    dispatch(toggleLoader(true));
    const token = localStorage.getItem(TOKEN);
    const body = JSON.stringify(jog);
    await axiosInstance.put(`${DATA_URL}/jog`, body, {
        headers: { Authorization: authorizationHeader(token) },
    });
    dispatch(toggleLoader(false));
};

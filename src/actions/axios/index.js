import axios from 'axios';

const COMMON_URL = `https://jogtracker.herokuapp.com/api/v1`;

export const authorizationHeader = (token) => `Bearer ${token}`;

const axiosInstance = axios.create({
    baseURL: COMMON_URL,
    headers: { 'Content-Type': 'application/json' },
});
export default axiosInstance;

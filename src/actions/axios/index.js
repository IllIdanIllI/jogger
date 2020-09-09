import axios from 'axios';

export const COMMON_URL = `https://jogtracker.herokuapp.com/api/v1`;
const axiosInstance = 
    axios.create({
        baseURL: COMMON_URL,
        headers: { 'Content-Type': 'application/json' },
    });
export default axiosInstance;

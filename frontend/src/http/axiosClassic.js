import axios from 'axios';
import Cookies from 'js-cookie'
import {SERVER_PORT} from "../shared/Variables";

export const api = axios.create({
    baseURL: `${SERVER_PORT}`,
    headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
    },
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Cookies.get('accessToken')}`
    return config
})

export default api


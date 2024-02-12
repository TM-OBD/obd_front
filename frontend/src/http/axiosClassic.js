import axios from 'axios';
import {SERVER_PORT} from "../shared/Variables";

const axiosInstance = axios.create({
    baseURL: `${SERVER_PORT}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;

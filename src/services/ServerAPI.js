import axios from "axios";

const ServerAPI = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `http://localhost:3000`,
        'Access-Control-Allow-Credentials': "true",
    },
    withCredentials: true
});

export default ServerAPI;
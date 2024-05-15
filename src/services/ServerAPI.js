import axios from 'axios';

const serverIP = process.env.REACT_APP_SEVER_IP;

const ServerAPI = axios.create({
    // baseURL: 'https://029eca3b-da52-44a5-8b41-4e8309d2f5af.mock.pstmn.io',
    // baseURL: 'http://heung115.iptime.org:8002',
    baseURL: serverIP,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `http://localhost:3000`,
        'Access-Control-Allow-Credentials': 'true',
    },
    // withCredentials: true,
});

export default ServerAPI;

import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3333',
    baseURL: 'https://proffy-nlw-2.herokuapp.com',
});

export default api;
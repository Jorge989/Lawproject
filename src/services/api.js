import axios from 'axios';

const api = axios.create({
    baseURL:'https://inova-actionsys.herokuapp.com/'
});

export default api;
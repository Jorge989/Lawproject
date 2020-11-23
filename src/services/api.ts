import axios from 'axios';


let api = axios.create({
    baseURL:'https://inova-actionsys.herokuapp.com/',
    
});


export default api;
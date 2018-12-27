import axios from "axios";

const fapi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: 'object'
});

export default fapi;
import axios from "axios";
import { baseURL } from '../config/apiConfig';

const fapi = axios.create({
    baseURL,
    responseType: 'object'
});

export default fapi;
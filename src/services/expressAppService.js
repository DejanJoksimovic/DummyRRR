import axios from "axios";

const expressAppService = axios.create({
    baseURL: 'http://localhost:3000',
    responseType: 'object'
});

export default expressAppService;
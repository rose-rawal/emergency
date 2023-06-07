import axios from 'axios';
import config from '../config';
 const serverInstance=axios.create({
    baseURL: config.API_URL_server
 })
 export default serverInstance
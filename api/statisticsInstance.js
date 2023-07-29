import axios from 'axios';
import config from '../config';
 const statisticsInstance=axios.create({
    baseURL: config.API_URL_statistics
 })
 export default statisticsInstance
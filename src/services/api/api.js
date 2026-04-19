import axios from 'axios';
import { BASE_URL } from '../api/baseUrl'; 

export const api = axios.create({
    baseURL: BASE_URL,
});
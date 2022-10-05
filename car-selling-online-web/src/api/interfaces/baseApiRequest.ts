import axios from "axios";

export const baseApiRequest = axios.create({
    baseURL: 'http://localhost:3001/api/',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})
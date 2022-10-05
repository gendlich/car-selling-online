import axios from "axios";

const porta = 3001;

export const baseApiRequest = axios.create({
    baseURL: `http://localhost:${porta}/api/`,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
})
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://netflix-mern-2022.herokuapp.com/api/",
    responseType: 'json',
})
// src/services/api.js
import axios from 'axios';

const API_URL = 'https://arula-test-env.eba-xqi6qn8m.ap-south-1.elasticbeanstalk.com/api'; // Replace with your backend URL

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the JWT token in the headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

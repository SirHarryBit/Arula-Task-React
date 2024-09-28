// src/services/authService.js
import api from './api';

export const signup = async (userData: { email: string; password: string; name: string; }) => {
    try {
        const response = await api.post('/auth/signup', userData);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId); // Store userId
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const login = async (userData: { email: string; password: string; }) => {
    try {
        const response = await api.post('/auth/login', userData);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId); // Store userId
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};


export const updateUser = async (userData: any) => {
    try {
        const response = await api.put('/auth/update', userData);
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

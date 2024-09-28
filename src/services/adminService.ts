// src/services/adminService.js
import api from './api';

export const getAllUsers = async () => {
    try {
        const response = await api.get('/admin/users');
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const assignCourse = async (userId: any, courseId: any) => {
    try {
        const response = await api.post('/admin/assign-course', { userId, courseId });
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const getAnalytics = async () => {
    try {
        const response = await api.get('/admin/analytics');
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

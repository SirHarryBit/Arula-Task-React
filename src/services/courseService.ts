// src/services/courseService.js
import api from './api';

export const addCourse = async (courseData: FormData) => {
    try {
        const response = await api.post('/courses', courseData);
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const getAllCourses = async () => {
    try {
        const response = await api.get('/courses');
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const getCourse = async (courseId: string) => {
    try {
        const response = await api.get(`/courses/${courseId}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};



export const deleteCourse = async (courseId: string) => {
    try {
        const response = await api.delete(`/courses/${courseId}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const getUserCourses = async (token: string) => {
    try {
        const response = await api.get('/courses/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error: any) {
        console.log(error.response.data);
        throw error.response.data;
    }
};

export const getUserCoursesByID = async (userId: string) => {
    try {
        const response = await api.get(`/courses/user/${userId}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};
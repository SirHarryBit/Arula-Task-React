// src/services/blogService.js
import api from './api';

export const addBlog = async (blogData: FormData) => {
    try {
        const response = await api.post('/blogs', blogData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const getAllBlogs = async () => {
    try {
        const response = await api.get('/blogs');
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const getBlog = async (blogId: string) => {
    try {
        const response = await api.get(`/blogs/${blogId}`);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error(error.message);
        }
    }
};


export const deleteBlog = async (blogId: string) => {
    try {
        const response = await api.delete(`/blogs/${blogId}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

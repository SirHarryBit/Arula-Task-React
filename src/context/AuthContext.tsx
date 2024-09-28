// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, useCallback } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
    setToken: (token: any) => void;
    getToken: () => any | null;
    logout: () => void; // Add logout function
    getUserId: () => string | null; // Add function to get userId
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: () => { },
    setToken: () => { },
    getToken: () => null,
    logout: () => { }, // Initialize logout function
    getUserId: () => null, // Initialize getUserId function
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if a valid JWT token exists in local storage
        const token = localStorage.getItem('jwtToken');
        const userId = localStorage.getItem('userId');
        if (token && userId) {
            setIsAuthenticated(true);
        }
    }, []);

    const setToken = useCallback((token: any) => {
        localStorage.setItem('jwtToken', token);
        setIsAuthenticated(true);
    }, []);

    const getToken = useCallback(() => {
        return localStorage.getItem('jwtToken');
    }, []);

    const getUserId = useCallback(() => {
        return localStorage.getItem('userId');
    }, []);

    const logout = useCallback(() => {
        // Remove the token and userId from local storage
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userId');
        // Set authentication status to false
        setIsAuthenticated(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, setToken, getToken, logout, getUserId }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

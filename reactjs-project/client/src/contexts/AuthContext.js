import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from '../services/authService.js';
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log(error);
        }
    };

    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values;
        if (repeatPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log(error);
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

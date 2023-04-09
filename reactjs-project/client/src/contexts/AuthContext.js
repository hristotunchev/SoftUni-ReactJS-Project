import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from '../services/authService.js';
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const AuthContext = createContext();

// This is wrapper component
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

            navigate('/');
            // navigate('/catalog');    // Navigate after fixing Catalog
        } catch (error) {
            console.log(error);     // we have to notify user instead
        }
    };

    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values;    // this is not supposed to be here
        if (repeatPassword !== registerData.password) {        // this is not supposed to be here
            return;                                 // we have to notify user instead
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/');
            // navigate('/catalog');    // Navigate after fixing Catalog
        } catch (error) {
            console.log('Imash greshka brat!');     // we have to notify user instead
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
        localStorage.clear();   // check this out ???
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


// This custom hook lets us have only 1 import (instead of 2) for using context - check Login.js
// export const useAuthContext = () => {
//     const context = useContext(AuthContext);

//     return context;
// };
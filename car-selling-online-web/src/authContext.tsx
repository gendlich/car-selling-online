import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

interface AuthContextData {
    authenticated: boolean;
    Login: (email?: string, senha?: string) => Promise<string | undefined>;
    Logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const ACCESS_TOKEN = 'access_token';


    const Login = async (email?: string, senha?: string): Promise<string | undefined> => {
        if (!!email && !!senha) {
            try {
                const { data } = await axios.post('http://localhost:3001/api/login/', {email, senha});

                localStorage.setItem(ACCESS_TOKEN, data);

                setAuthenticated(true);
                return data;
            } catch (e) {
                setAuthenticated(false);
            }
        } else {
            const accessToken = localStorage.getItem(ACCESS_TOKEN);
            if (!accessToken) {
                throw new Error('TokenNotFound');
            }
            setAuthenticated(true);
            return accessToken
        }
    };

    const Logout = (): Promise<void> => new Promise(async (resolve: any) => {
        localStorage.removeItem(ACCESS_TOKEN)
        setAuthenticated(false);
        resolve();
    });

    return (
        <AuthContext.Provider
            value={{ authenticated, Login, Logout}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

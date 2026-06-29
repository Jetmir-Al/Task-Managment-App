import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { status } from "../api/auth.api";
import type { IUser } from "../types/IUser";

interface IAuthProvider {
    children: ReactNode
}


export const AuthProvider = ({ children }: IAuthProvider) => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [user, setUserInfo] = useState<IUser | null>(null);
    const [reFetch, setRefetch] = useState<boolean>(false);

    const reFetchFunc = (value: boolean) => {
        setRefetch(value);
    }
    const setUser = (user: IUser | null) => {
        setUserInfo(user);
    }
    const setAuth = (value: boolean) => {
        setAuthenticated(value);
    }
    useEffect(() => {

        const checkAuthStatus = async () => {
            try {
                const data = await status();
                if (data) {
                    setUserInfo(data.user);
                    setAuthenticated(data.authenticated);
                } else {
                    setAuthenticated(false);
                    setUserInfo(null);
                }
            } catch {
                setUserInfo(null);
                setAuthenticated(false);
            }

            if (reFetch) {
                reFetchFunc(false);
            }
        }


        checkAuthStatus();
    }, [reFetch])



    return (
        <AuthContext.Provider
            value={{
                authenticated,
                user,
                setUser,
                setAuth,
                reFetch,
                reFetchFunc
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
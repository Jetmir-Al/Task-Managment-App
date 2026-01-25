import { createContext } from "react";
import type { IUser } from "../types/IUser";

interface IAuthContext {
    authenticated: boolean,
    user: IUser | null,
    setUser: (user: IUser | null) => void,
    setAuth: (value: boolean) => void,
    reFetch: boolean,
    reFetchFunc: (value: boolean) => void,
}

export const defaultAuth: IAuthContext = {
    authenticated: false,
    user: null,
    setUser: () => { },
    setAuth: () => { },
    reFetch: false,
    reFetchFunc: () => { }
}



export const AuthContext = createContext<IAuthContext>(defaultAuth);
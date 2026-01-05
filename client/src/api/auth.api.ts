import { api } from "./api";

export const singup = async (name: string, email: string, password: string) => {
    const res = await api.post("/auth/signup", {
        name,
        email,
        password
    });
    return res.data;
}

export const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", {
        email, password
    });

    return res.data;
}

export const logout = async () => {
    await api.post("/auth/logout", {}, { withCredentials: true });
}


export const status = async () => {
    const res = await api.get("/auth/status", { withCredentials: true });
    return res.data;
}
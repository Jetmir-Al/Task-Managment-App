import { api } from "./api";

export const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", {
        email, password
    });

    console.log(res);
}



export const status = async () => {
    const res = await api.get("/auth/status", { withCredentials: true });
    return res.data;
}
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

export const deleteAcc = async () => {
    const res = await api.delete("/auth/deleteUser", { withCredentials: true });
    return res.data;
}

export const UpdateName = async (name: string) => {
    const res = await api.put("/auth/updateName", { name }, { withCredentials: true });
    return res.data;
}

export const UpdateEmail = async (email: string) => {
    const res = await api.put("/auth/updateEmail", { email }, { withCredentials: true });
    return res.data;
}

export const UpdatePsw = async (oldPsw: string, newPsw: string) => {
    const res = await api.put("/auth/updatePsw", { oldPsw, newPsw }, { withCredentials: true });
    return res.data;
}
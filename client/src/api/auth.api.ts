import { api } from "./api";

export const login = async (email: string, password: string) => {
    const res = await api.post("/login", {
        email, password
    });

    console.log(res);
}

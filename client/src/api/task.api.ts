import { api } from "./api";

export const allTasks = async (userID?: number) => {
    const res = await api.post("/task/all", { userID }, { withCredentials: true });
    return res.data;
}
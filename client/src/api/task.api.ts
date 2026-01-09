import type { ICreateTaskList } from "../types/ITask";
import { api } from "./api";

export const allTasks = async (userID?: number) => {
    const res = await api.post("/task/all", { userID }, { withCredentials: true });
    return res.data;
}

export const createTaskList = async ({ userID, category, priority }: ICreateTaskList) => {
    const res = await api.post("/task/createTaskList", { userID, category, priority }, { withCredentials: true });
    return res.data;
}
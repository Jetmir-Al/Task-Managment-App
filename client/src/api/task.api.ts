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

export const PendingTaskList = async (userID?: number) => {
    const res = await api.post("/task/pending", { userID }, { withCredentials: true });
    return res.data;
}

export const ProgressTaskList = async (userID?: number) => {
    const res = await api.post("/task/progress", { userID }, { withCredentials: true });
    return res.data;
}
export const FinishedTaskList = async (userID?: number) => {
    const res = await api.post("/task/finished", { userID }, { withCredentials: true });
    return res.data;
}
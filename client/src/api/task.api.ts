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
    const res = await api.post("/task/pendingTasks", { userID }, { withCredentials: true });
    return res.data;
}

export const ProgressTaskList = async (userID?: number) => {
    const res = await api.post("/task/progressTasks", { userID }, { withCredentials: true });
    console.log(res.data);
    return res.data;
}
export const FinishedTaskList = async (userID?: number) => {
    const res = await api.post("/task/finishedTasks", { userID }, { withCredentials: true });
    console.log(res);

    return res.data;
}
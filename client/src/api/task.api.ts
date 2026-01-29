import type { ICreateTaskList } from "../types/ITask";
import { api } from "./api";

export const allTasks = async () => {
    const res = await api.post("/task/all", {}, { withCredentials: true });
    return res.data;
}

export const createTaskList = async ({ category, priority }: ICreateTaskList) => {
    const res = await api.post("/task/createTaskList", { category, priority }, { withCredentials: true });
    return res.data;
}

export const PendingTaskList = async () => {
    const res = await api.post("/task/pendingTasks", {}, { withCredentials: true });
    return res.data;
}

export const ProgressTaskList = async () => {
    const res = await api.post("/task/progressTasks", {}, { withCredentials: true });
    return res.data;
}
export const FinishedTaskList = async () => {
    const res = await api.post("/task/finishedTasks", {}, { withCredentials: true });
    return res.data;
}

export const DeleteTaskList = async (taskID: number) => {
    const res = await api.post("/task/deleteTask", { taskID }, { withCredentials: true });
    return res.data;
}


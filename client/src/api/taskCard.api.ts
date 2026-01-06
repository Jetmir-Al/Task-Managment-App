import { api } from "./api";


export const AllTasksCards = async (taskID?: number) => {
    try {
        const res = await api.post("/taskCard/allTaskCards", { taskID }, { withCredentials: true });
        return res.data;
    } catch (err) {
        console.error(err);
    }
} 

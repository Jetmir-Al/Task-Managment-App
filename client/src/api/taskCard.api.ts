import { api } from "./api";


export const AllTasksCards = async (taskID?: number) => {
    try {
        const res = await api.post("/taskCard/allTaskCards", { taskID }, { withCredentials: true });
        return res.data;
    } catch (err) {
        console.error(err);
    }
}

export const CreateTaskCard = async (taskID: number, title: string, description: string, status: string, deadline: string | null) => {
    try {
        const res = await api.post("/taskCard/createTaskCard", { taskID, title, description, status, deadline }, { withCredentials: true });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

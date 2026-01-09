import { TaskCardModal } from "../models/taskCard.model";


export const TaskCardService = {


    async allTaskCards(taskID: number) {
        const res = await TaskCardModal.AllTaskCards(taskID);
        return res
    },

    async createTaskCard(taskID: number, title: string, description: string, status: string, deadline: Date) {
        const res = await TaskCardModal.InsertTaskCard(taskID, title, description, status, deadline);
    }
}


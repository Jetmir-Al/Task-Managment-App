import { TaskCardModal } from "../models/taskCard.model";


export const TaskCardService = {


    async allTaskCards(taskID: number) {
        const res = await TaskCardModal.AllTaskCards(taskID);
        return res
    }
}


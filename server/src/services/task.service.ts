import { TaskModal } from "../models/task.model"


export const TaskModalSerice = {

    async allUserTasks(userID: number) {
        const allTasks = await TaskModal.AllTasks(userID);
        return allTasks;
    }


}
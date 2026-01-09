import { TaskModal } from "../models/task.model"


export const TaskModalSerice = {

    async allUserTasks(userID: number) {
        const allTasks = await TaskModal.AllTasks(userID);
        return allTasks;
    },

    async createTask(userID: number, category: string, priority: string) {
        await TaskModal.createTaskList(userID, category, priority);
    }

}
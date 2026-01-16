import { TaskModal } from "../models/task.model"


export const TaskModalSerice = {

    async allUserTasks(userID: number) {
        const allTasks = await TaskModal.AllTasks(userID);
        return allTasks;
    },

    async createTask(userID: number, category: string, priority: string) {
        await TaskModal.createTaskList(userID, category, priority);
    },

    async pendingTasks(userID: number) {
        const pending = await TaskModal.PendingTasks(userID);
        return pending;
    },
    async progressTasks(userID: number) {
        const progress = await TaskModal.ProgressTasks(userID);
        return progress;
    },
    async completedTasks(userID: number) {
        const completed = await TaskModal.FinishedTasks(userID);
        return completed;
    }

}
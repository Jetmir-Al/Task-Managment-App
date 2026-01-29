import { CreateTaskListDTO } from "../types/DTO/task.dto";
import { ITask } from "../types/ITask";

export const isCreateTaskList = (body: any): body is CreateTaskListDTO => {
    return (
        typeof body === "object" &&
        typeof body.category === "string" &&
        typeof body.priority === "string" &&
        body.priority === 'Urgent' ||
        body.priority === 'High' ||
        body.priority === 'Medium' ||
        body.priority === 'Low'
    );
}

export const isDeleteTaskList = (body: any): body is ITask => {
    return (
        typeof body === "object" &&
        typeof body.taskID === "number"
    );
}
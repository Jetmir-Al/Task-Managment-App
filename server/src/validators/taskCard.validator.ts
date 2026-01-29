import { TaskCardDto, CreateTaskDTO } from "../types/DTO/taskCard.dto";
import { ITaskCard } from "../types/ITaskCard";


export const isAllTaskCards = (body: any): body is TaskCardDto => {
    return (
        typeof body === "object" &&
        typeof body.taskID === "number"
    );
}

export const isTaskCard = (body: any): body is ITaskCard => {
    return (
        typeof body === "object" &&
        typeof body.taskCardID === "number"
    );
}

export const isCreateTaskCard = (body: any): body is CreateTaskDTO => {
    return (
        typeof body === "object" &&
        typeof body.title === "string" &&
        typeof body.description === "string" &&
        typeof body.deadline === "string" &&
        typeof body.status === "string" &&
        body.status === 'pending' ||
        body.status === 'in progress' ||
        body.status === 'finished'
    );
}

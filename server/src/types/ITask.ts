import { status } from "./ITaskCard"

export interface ITask {
    task: ITaskModal
}

export interface ITaskStatus {
    taskID: number,
    userID: number,
    category: string,
    priority: Priority,
    taskCardID: number,
    title: string,
    description: string,
    status: status,
    createdAt: Date,
    deadline: Date
}

interface ITaskModal {
    taskID: number,
    userID: number,
    category: string,
    priority: Priority
}

enum Priority {
    Urgent = 'Urgent',
    Hight = 'Hight',
    Medium = 'Medium',
    Low = 'Low'
}
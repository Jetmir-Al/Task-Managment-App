
export interface ITaskCard {
    taskCardID: number,
    taskID: number,
    title: string,
    description: string,
    status: status,
    createdAt: Date,
    deadline: Date
}

export enum status {
    pending = 'pending',
    progress = 'in progress',
    finished = 'finished'
}

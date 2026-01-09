

export interface TaskCardDto {
    taskID: number;
}

export interface CreateTaskDTO {
    taskID: number;
    title: string;
    description: string;
    status: status;
    deadline: Date;
}


enum status {
    pending = 'pending',
    progress = 'in progress',
    finished = 'finished'
}

export interface ITask {
    task: ITaskModal
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
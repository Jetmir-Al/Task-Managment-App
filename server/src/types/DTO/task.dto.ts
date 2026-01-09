

export interface TaskDTO {
    userID: number
}

export interface CreateTaskListDTO {
    userID: number,
    category: string,
    priority: priority
}

enum priority {
    Urgernt = 'Urgernt',
    High = 'High',
    Medium = 'Medium',
    Low = 'Low'
}
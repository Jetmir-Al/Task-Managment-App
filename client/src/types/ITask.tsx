export interface ITaskModal {
  taskID: number,
  userID: number,
  category: string,
  priority: string
}

export interface ICreateTaskList {
  userID?: number,
  category?: string,
  priority?: string;
}


export interface ITask {
  id: string;
  title: string;
  description: string;
  listId: string;
  position: number;
}

export interface ITaskCardForm {
  taskID: number,
  title: string,
  description: string,
  status: string | "pending",
  deadline: null | string
}

export interface ITaskCardProps {
  taskCardID: number,
  taskID: number,
  title: string,
  description: string,
  status: string,
  createdAt: Date,
  deadline: Date | string,
  finished?: () => void,
  remove?: () => void;
}

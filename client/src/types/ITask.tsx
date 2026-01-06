export interface ITaskModal {
  taskID: number,
  userID: number,
  category: string,
  priority: string
}
export interface ITask {
  id: string;
  title: string;
  description: string;
  listId: string;
  position: number;
}

export interface ITaskCardProps {
  taskCardID: number,
  taskID: number,
  title: string,
  description: string,
  status: string,
  createdAt: Date,
  deadline: Date,
  finished?: () => void,
  remove?: () => void;
}

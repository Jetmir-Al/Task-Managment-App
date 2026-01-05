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
  title: string,
  summary: string,
  details: string,
  finished?: () => void,
  remove?: () => void;
}
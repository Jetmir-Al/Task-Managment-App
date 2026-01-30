import { type ITaskCardProps, type ITaskModal } from "../../types/ITask";
import Button from "../ui/Button";
import TaskCard from "./TaskCard";
import "./taskModel.css";
import Error from "../../utils/Error";
import NoInfo from "../../utils/NoInfo";
import { useTaskHook } from "../../hooks/TaskHook";
import TaskCardForm from "../forms/TaskCardForm";
import Loading from "../../utils/Loading";
import { Activity } from "react";
import { useAllTaskCards, useDeleteTaskCard, useUpdToFinished } from "../../services/taskCard.service";
import { useDeleteTaskList } from "../../services/task.service";

const TaskModal = ({ taskID, category, priority }: ITaskModal) => {

    const { toggleTCard, toggleTaskCard, taskIDForm } = useTaskHook();
    const { data: tasks, isError, error, refetch, isLoading } = useAllTaskCards(taskID);
    const { mutateAsync: deleteTaskList } = useDeleteTaskList();
    const { mutateAsync: updateFinishedTask } = useUpdToFinished();
    const { mutateAsync: deleteTask } = useDeleteTaskCard();


    if (isError) {
        return <Error
            title="Error getting task cards"
            details={error}
            onRetry={() => {
                refetch();
            }} />
    }
    if (isLoading) return <Loading />


    return (

        <div className="taskModal">
            <div className="taskHeader">
                <h3>{category} ~ {priority} Priority</h3>
                <Button
                    type="button"
                    className="deleteListBtn"
                    onClick={() => deleteTaskList(taskID)}
                >
                    Delete this List
                </Button>
            </div>

            <div className="taskCards">
                <Activity mode={toggleTaskCard && taskID === taskIDForm ? "visible" : "hidden"}>
                    <TaskCardForm taskID={taskID} />
                </Activity>
                <Activity mode={toggleTaskCard && taskID === taskIDForm ? "hidden" : "visible"}>
                    {
                        tasks?.length === 0 ? <NoInfo
                            noInfo="No task cards!"
                        /> :
                            tasks?.map((task: ITaskCardProps) => (
                                <TaskCard
                                    key={task.taskCardID}
                                    taskCardID={task.taskCardID}
                                    taskID={task.taskID}
                                    title={task.title}
                                    description={task.description}
                                    status={task.status}
                                    createdAt={task.createdAt}
                                    deadline={task.deadline}
                                    finished={async () => await updateFinishedTask(task.taskCardID)}
                                    remove={async () => await deleteTask(task.taskCardID)}
                                />
                            ))
                    }
                </Activity>

            </div>
            {
                toggleTaskCard && taskIDForm === taskID ? null :
                    <div className="newCard">
                        <Button
                            className="newCardBtn"
                            type="button"
                            onClick={() => toggleTCard(taskID)}
                        >
                            Add a new card
                        </Button>
                    </div>
            }
        </div>
    );
}

export default TaskModal;

import { type ITaskCardProps, type ITaskModal } from "../../types/ITask";
import Button from "../ui/Button";
import TaskCard from "./TaskCard";
import "./taskModel.css";
import Error from "../../utils/Error";
import { AllTasksCards } from "../../api/taskCard.api";
import NoInfo from "../../utils/NoInfo";
import { useTaskHook } from "../../hooks/TaskHook";
import TaskCardForm from "./TaskCardForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "../../utils/Loading";
import { Activity } from "react";
import { DeleteTaskList } from "../../api/task.api";

const TaskModal = ({ taskID, category, priority }: ITaskModal) => {

    const { toggleTCard, toggleTaskCard, taskIDForm } = useTaskHook();
    const queryClient = useQueryClient();

    const { data: tasks, isError, error, isLoading } = useQuery({
        queryKey: ['taskCards', taskID],
        queryFn: async () => {
            const res = await AllTasksCards(taskID);
            return res;
        }
    });

    const { mutateAsync: deleteTaskList } = useMutation({
        mutationFn: async (taskID: number) => {
            return await DeleteTaskList(taskID);
        },
        onError: (err) => {
            return <Error
                title="Error deleting the task"
                details={err}
                onClose={() => { }}
                onRetry={() => { }} />
        },
        onSuccess: (res) => {
            if (res.message === "Deleted Succesfully") {
                queryClient.invalidateQueries({
                    queryKey: ['taskLists']
                });
            }
        },
    });


    if (isError) {
        return <Error
            title="Error getting task cards"
            details={error}
            onClose={() => { }}
            onRetry={() => { }} />
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
                            tasks?.map((task: ITaskCardProps, index: number) => (
                                <>
                                    <TaskCard
                                        key={index}
                                        taskCardID={task.taskCardID}
                                        taskID={task.taskID}
                                        title={task.title}
                                        description={task.description}
                                        status={task.status}
                                        createdAt={task.createdAt}
                                        deadline={task.deadline}
                                        finished={() => console.log("ss")}
                                        remove={() => console.log("ss")}
                                    />
                                </>
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

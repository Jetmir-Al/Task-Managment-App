import { type ITaskCardProps, type ITaskModal } from "../../types/ITask";
import Button from "../ui/Button";
import TaskCard from "./TaskCard";
import "./taskModel.css";
import Error from "../../utils/Error";
import { AllTasksCards } from "../../api/taskCard.api";
import NoInfo from "../../utils/NoInfo";
import { useTaskHook } from "../../hooks/TaskHook";
import TaskCardForm from "./TaskCardForm";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../utils/Loading";
import { Activity } from "react";

const TaskModal = ({ taskID, category, priority }: ITaskModal) => {

    const { toggleTList, toggleTCard, toggleTaskCard, taskIDForm } = useTaskHook();

    const { data: tasks, isError, error, isLoading } = useQuery({
        queryKey: ['taskCards', taskID],
        queryFn: async () => {
            const res = await AllTasksCards(taskID);
            return res;
        }
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
                    className="btn"
                    onClick={() => toggleTList()}
                >
                    + Add another List
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

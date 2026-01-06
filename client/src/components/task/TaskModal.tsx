import { useEffect, useState } from "react";
import { type ITaskCardProps, type ITaskModal } from "../../types/ITask";
import Button from "../ui/Button";
import TaskCard from "./TaskCard";
import "./taskModel.css";
import Error from "../../utils/Error";
import { AllTasksCards } from "../../api/taskCard.api";
import NoInfo from "../../utils/NoInfo";
import { useTaskHook } from "../../hooks/TaskHook";
import TaskCardForm from "./TaskCardForm";

const TaskModal = ({ taskID, category, priority }: ITaskModal) => {

    const { toggleTList, toggleTCard, toggleTaskCard } = useTaskHook();
    const [taskCard, setTaskCard] = useState<ITaskCardProps[] | null>(null);

    useEffect(() => {

        async function getTaskCards() {
            try {
                const res = await AllTasksCards(taskID);
                setTaskCard(res);
            } catch (error) {
                if (error) {

                    return <Error
                        title="Error getting task cards"
                        details={error}
                        onClose={() => { }}
                        onRetry={() => { }}
                    />
                }
            }
        }
        getTaskCards();
    }, [taskID])

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
                {
                    toggleTaskCard ? <TaskCardForm /> :

                        taskCard?.length === 0 ? <NoInfo
                            noInfo="No task cards -> Create one!"
                        /> :
                            taskCard?.map((task, index) => (
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
                            ))
                }
            </div>
            {
                toggleTaskCard === true ? null :
                    <div className="newCard">
                        <Button
                            className="newCardBtn"
                            type="button"
                            onClick={() => toggleTCard()}
                        >
                            Add a new card
                        </Button>
                    </div>
            }
        </div>
    );
}

export default TaskModal;

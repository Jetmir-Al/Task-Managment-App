import "./pageStyles/boardPage.css";
import TaskCard from "../components/task/TaskCard";
import Button from "../components/ui/Button";
import Loading from "../utils/Loading";
import Error from "../utils/Error";
import NoInfo from "../utils/NoInfo";
import type { ITaskCardProps } from "../types/ITask";
import { useStatusHook } from "../hooks/StatusFormHook";
import PendingTask from "../components/forms/PendingTask";
import ProgressTask from "../components/forms/ProgressTask";
import CompletedTask from "../components/forms/CompletedTask";
import { useTaskStatus } from "../services/task.service";
import { useDeleteTaskCard } from "../services/taskCard.service";

const BoardPage = () => {
    const { toggleCompletedFunc, togglePendingFunc, toggleProgressFunc,
        toggleStatusCompleted, toggleStatusPending, toggleStatusProgress } = useStatusHook();

    const { isError, error, isLoading, data: statusTasks } = useTaskStatus();
    const { mutateAsync: deleteTaskCard } = useDeleteTaskCard();

    if (isLoading) return <Loading />;
    if (isError) {
        return <Error
            title="Error getting task statuses"
            details={error}
            onClose={() => { }}
            onRetry={() => { }} />
    }

    return (
        <div className="boardPage-container">
            <div className="pendingTasks">
                <h2>Pending Tasks</h2>
                {
                    statusTasks?.pending?.length === 0 ? <NoInfo noInfo="No pending tasks!" />
                        :
                        toggleStatusPending ? <PendingTask />
                            :
                            statusTasks?.pending?.map((pen: ITaskCardProps, index: number) => (
                                <TaskCard
                                    key={index}
                                    title={pen.title}
                                    description={pen.description}
                                    deadline={pen.deadline}
                                    createdAt={pen.createdAt}
                                    taskCardID={pen.taskCardID}
                                    taskID={pen.taskID}
                                    status={pen.status}
                                    finished={() => console.log("ss")}
                                    remove={async () => await deleteTaskCard(pen.taskCardID)}
                                />
                            ))
                }
                {
                    toggleStatusPending === false &&
                    <Button
                        className={"addPendingTask"}
                        type={"button"}
                        onClick={() => togglePendingFunc()}
                    >
                        + ADD
                    </Button>
                }
            </div>
            <div className="inProgresTasks">
                <h2>In Progress Tasks</h2>
                {
                    statusTasks?.progress?.length === 0 ? <NoInfo noInfo="No in progress tasks!" />
                        : toggleStatusProgress ? <ProgressTask />
                            :
                            statusTasks?.progress?.map((pro: ITaskCardProps, index: number) => (
                                <TaskCard
                                    key={index}
                                    title={pro.title}
                                    description={pro.description}
                                    deadline={pro.deadline}
                                    createdAt={pro.createdAt}
                                    taskCardID={pro.taskCardID}
                                    taskID={pro.taskID}
                                    status={pro.status}
                                    finished={() => console.log("ss")}
                                    remove={async () => await deleteTaskCard(pro.taskCardID)}
                                />
                            ))
                }
                {
                    toggleStatusProgress === false &&
                    <Button
                        className={"addProgressTask"}
                        type={"button"}
                        onClick={() => toggleProgressFunc()}
                    >
                        + In Progress
                    </Button>
                }
            </div>
            <div className="completedTasks">
                <h2>Completed Tasks</h2>
                {
                    statusTasks?.finished?.length === 0 ? <NoInfo noInfo="No completed tasks!" />
                        : toggleStatusCompleted ? <CompletedTask /> :
                            statusTasks?.finished.map((f: ITaskCardProps, index: number) => (
                                <TaskCard
                                    key={index}
                                    title={f.title}
                                    description={f.description}
                                    deadline={f.deadline}
                                    createdAt={f.createdAt}
                                    taskCardID={f.taskCardID}
                                    taskID={f.taskID}
                                    status={f.status}
                                    remove={async () => await deleteTaskCard(f.taskCardID)}
                                />
                            ))
                }
                {
                    toggleStatusCompleted === false &&
                    <Button
                        className={"addCompletedTask"}
                        type={"button"}
                        onClick={() => toggleCompletedFunc()}
                    >
                        + Finished
                    </Button>
                }
            </div>
        </div>
    );
}

export default BoardPage;
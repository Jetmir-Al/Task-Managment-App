import "./pageStyles/boardPage.css";
import TaskCard from "../components/task/TaskCard";
import Button from "../components/ui/Button";
import { useQuery } from "@tanstack/react-query";
import { useAuthHook } from "../hooks/AuthHook";
import { FinishedTaskList, PendingTaskList, ProgressTaskList } from "../api/task.api";
import Loading from "../utils/Loading";
import Error from "../utils/Error";
import NoInfo from "../utils/NoInfo";

const BoardPage = () => {

    const { user } = useAuthHook();
    const { isError, error, isLoading, data: statusTasks } = useQuery({
        queryKey: ["statusTasks", user?.userID],
        queryFn: async () => {
            const pending = await PendingTaskList(user?.userID);
            const progress = await ProgressTaskList(user?.userID);
            const finished = await FinishedTaskList(user?.userID);
            return { pending, progress, finished };
        }
    });
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
                        : <TaskCard
                            title="New Task"
                            description="ss"
                            deadline={new Date}
                            createdAt={new Date}
                            taskCardID={2}
                            taskID={2}
                            status="ss"
                            finished={() => console.log("ss")}
                            remove={() => console.log("ss")}
                        />
                }
                <Button
                    className={"addPendingTask"}
                    type={"button"}
                    onClick={() => console.log("ss")}
                >
                    + ADD
                </Button>
            </div>
            <div className="inProgresTasks">
                <h2>In Progress Tasks</h2>
                {
                    statusTasks?.progress?.length === 0 ? <NoInfo noInfo="No in progress tasks!" />
                        : <TaskCard
                            title="New Task"
                            description="ss"
                            deadline={new Date}
                            createdAt={new Date}
                            taskCardID={2}
                            taskID={2}
                            status="ss"
                            finished={() => console.log("ss")}
                            remove={() => console.log("ss")}
                        />
                }

                <Button
                    className={"addProgressTask"}
                    type={"button"}
                    onClick={() => console.log("ss")}
                >
                    + In Progress
                </Button>
            </div>
            <div className="completedTasks">
                <h2>Completed Tasks</h2>
                {
                    statusTasks?.finished?.length === 0 ? <NoInfo noInfo="No completed tasks!" />
                        : <TaskCard
                            title="New Task"
                            description="ss"
                            deadline={new Date}
                            createdAt={new Date}
                            taskCardID={2}
                            taskID={2}
                            status="ss"
                            remove={() => console.log("ss")}
                        />
                }

                <Button
                    className={"addCompletedTask"}
                    type={"button"}
                    onClick={() => console.log("ss")}
                >
                    + Finished
                </Button>
            </div>
        </div>
    );
}

export default BoardPage;
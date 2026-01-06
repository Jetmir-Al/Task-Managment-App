import "./pageStyles/boardPage.css";
import TaskCard from "../components/task/TaskCard";
import Button from "../components/ui/Button";

const BoardPage = () => {
    return (
        <div className="boardPage-container">
            <div className="pendingTasks">
                <h2>Pending Tasks</h2>
                <TaskCard
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
                <TaskCard
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
                <TaskCard
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
                <TaskCard
                    title="New Task"
                    description="ss"
                    deadline={new Date}
                    createdAt={new Date}
                    taskCardID={2}
                    taskID={2}
                    status="ss"
                    // finished={}
                    remove={() => console.log("ss")}
                />

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
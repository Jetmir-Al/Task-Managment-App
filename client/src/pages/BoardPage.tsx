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
                    summary="Po"
                    details="yas queen"
                    finished={() => console.log("ss")}
                    remove={() => console.log("ss")}
                />
                <TaskCard
                    title="New Task"
                    summary="Po"
                    details="yas queen"
                    finished={() => console.log("ss")}
                    remove={() => console.log("ss")}
                />
                <Button
                    className={"addPendingTask"}
                    type={"button"}
                    onClick={() => console.log("ss")}
                >
                    + Add Another Task
                </Button>
            </div>
            <div className="inProgresTasks">
                <h2>In Progress Tasks</h2>
                <TaskCard
                    title="progress Task"
                    summary="Po"
                    details="yas queen"
                    finished={() => console.log("ss")}
                    remove={() => console.log("ss")}
                />
            </div>
            <div className="completedTasks">
                <h2>Completed Tasks</h2>
                <TaskCard
                    title="Completed Task"
                    summary="Po"
                    details="yas queen"
                    finished={() => console.log("ss")}
                    remove={() => console.log("ss")}
                />
            </div>
        </div>
    );
}

export default BoardPage;
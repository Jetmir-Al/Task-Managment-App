import Button from "../ui/Button";
import TaskCard from "./TaskCard";
import "./taskModel.css";

const TaskModal = () => {
    return (
        <div className="taskModal-container">
            <div className="taskModal">
                <div className="taskHeader">
                    <h3>To do</h3>
                    <Button
                        type="button"
                        className="btn"
                        onClick={() => console.log("")}
                    >
                        + Add another List
                    </Button>
                </div>
                <div className="taskCards">

                    <TaskCard
                        title="New Task"
                        summary="Po"
                        details="yas queen"
                        finished={() => console.log("ss")}
                        remove={() => console.log("ss")}
                    />
                    <TaskCard
                        title="In Progress"
                        summary="po"
                        details="yas queen"
                        finished={() => console.log("ss")}
                        remove={() => console.log("ss")}
                    />

                </div>

                <div className="newCard">
                    <Button
                        className="newCardBtn"
                        type="button"
                        onClick={() => console.log("s")}
                    >
                        Add a new card
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default TaskModal;
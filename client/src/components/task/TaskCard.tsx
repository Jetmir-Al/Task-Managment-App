import Button from "../ui/Button";
import "./taskCard.css";
import type { ITaskCardProps } from "../../types/ITask";


const TaskCard = ({ taskCardID, taskID, title, description, status, deadline, createdAt, finished, remove }: ITaskCardProps) => (
    <div className="taskCard">
        <h3>{title} ~ {status} </h3>
        <p>
            {description} ~ {taskCardID} ~ {taskID}
        </p>
        <p>{new Date(deadline).toUTCString()} ~ {new Date(createdAt).toDateString()}</p>
        <div className="taskCard-btns">

            {
                finished &&
                <Button
                    type="button"
                    onClick={finished}
                    className="addCompletedTask"
                >
                    Finished
                </Button>
            }
            <Button
                type="button"
                onClick={remove}
                className="deleteBtn"
            >
                Delete
            </Button>
        </div>
    </div>
)

export default TaskCard;
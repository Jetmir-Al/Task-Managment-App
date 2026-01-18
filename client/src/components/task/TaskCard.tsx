import Button from "../ui/Button";
import "./taskCard.css";
import type { ITaskCardProps } from "../../types/ITask";


const TaskCard = ({ title, description, status, deadline, createdAt, finished, remove }: ITaskCardProps) => (
    <div className="taskCard">
        <h3>{title} ~ {status === "finished" ? "Finished" :
            status === "in progress" ? "In Progress" : "Pending"
        } </h3>
        <p>
            {description}
        </p>
        <p>{new Date(deadline).toDateString()} ~ {new Date(createdAt).toDateString()}</p>
        <div className="taskCard-btns">

            {status === 'finished' ? null :
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
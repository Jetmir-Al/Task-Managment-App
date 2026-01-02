import Button from "../ui/Button";
import "./taskCard.css";
import type { ITaskCardProps } from "../../types/ITask";


const TaskCard = ({ title, summary, details, finished, remove }: ITaskCardProps) => (
    <div className="taskCard">
        <h3>{title}</h3>
        <details>
            <summary>
                {summary}
            </summary>
            {details}
        </details>
        <div className="taskCard-btns">

            {
                finished &&
                <Button
                    type="button"
                    onClick={finished}
                    className="btn"
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
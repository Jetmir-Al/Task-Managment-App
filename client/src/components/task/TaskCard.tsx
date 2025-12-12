import Button from "../ui/Button";
import "./taskCard.css";


interface TaskCardProps {
    title: string,
    summary: string,
    details: string,
    finished: () => void,
    remove?: () => void
}

const TaskCard = ({ title, summary, details, finished, remove }: TaskCardProps) => (
    <div className="taskCard">
        <h3>{title}</h3>
        <details>
            <summary>
                {summary}
            </summary>
            {details}
        </details>
        <div className="taskCard-btns">

            <Button
                type="button"
                onClick={finished}
                className="btn"
            >
                Finished
            </Button>
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
import { useState } from "react";
import "./taskForm.css"
import Button from "../ui/Button";
import { useTaskHook } from "../../hooks/TaskHook";


const TaskCardForm = () => {
    const { toggleTCard } = useTaskHook();
    const [title, setTitle] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const [deadline, setDeadline] = useState<Date | null>(null);

    return (
        <form className="formContainer">
            <h2>New Card</h2>
            <label>
                Title <br /> <br />
                <input type="text" placeholder="E.x Clean room"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Description <br /> <br />
                <input type="text" placeholder="In depth explenation"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label>
                Deadline <br /> <br />
                <input type="datetime-local"
                    required
                    onChange={(e) => e.target.valueAsDate}
                />
            </label>
            <label>
                Status <br /> <br />
                <select name="" id="" required
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option selected disabled value="">Select Status!</option>
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="finished">Finished</option>
                </select>
            </label>
            <div className="formBtns">
                <Button
                    type="submit"
                    className=""
                    onClick={() => { }}
                >
                    Submit
                </Button>
                <Button
                    type="button"
                    className=""
                    onClick={() => toggleTCard()}
                >
                    Cancel
                </Button>
            </div>
        </form>
    )
}

export default TaskCardForm;
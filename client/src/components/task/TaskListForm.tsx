import { useState } from "react";
import "./taskForm.css"
import Button from "../ui/Button";
import { useTaskHook } from "../../hooks/TaskHook";


const TaskListForm = () => {
    const { toggleTList } = useTaskHook();
    const [category, setCategory] = useState<string | null>(null);
    const [priority, setPriority] = useState<string | null>(null)

    return (
        <form className="formContainer">
            <h2>New List</h2>
            <label>
                Category <br /> <br />
                <input type="text" placeholder="E.x Work or Hobby"
                    required
                    onChange={(e) => setCategory(e.target.value)} />
            </label>
            <label>
                Priority <br /> <br />
                <select name="" id="" required
                    onChange={(e) => setPriority(e.target.value)}>
                    <option selected disabled value="">Select priority!</option>
                    <option value="Urgent">Urgent</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
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
                    onClick={() => toggleTList()}
                >
                    Cancel
                </Button>
            </div>
        </form>
    )
}

export default TaskListForm;
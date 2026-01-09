import { useState } from "react";
import "./taskForm.css"
import Button from "../ui/Button";
import { useTaskHook } from "../../hooks/TaskHook";
import Error from "../../utils/Error";
import { useAuthHook } from "../../hooks/AuthHook";
import { createTaskList } from "../../api/task.api";


const TaskListForm = () => {
    const { toggleTList } = useTaskHook();
    const { user } = useAuthHook();
    const [category, setCategory] = useState<string>();
    const [priority, setPriority] = useState<string>();

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const userID = user?.userID;
        try {
            const res = await createTaskList({ userID, category, priority });
            if (res.message === "Inserted succesfully") {
                toggleTList();
            }
        } catch (error) {
            if (error) {

                return <Error
                    title="Error getting task cards"
                    details={error}
                    onClose={() => { }}
                    onRetry={() => { }}
                />
            }
        }
    }

    return (
        <form className="formContainer" onSubmit={handleFormSubmit}>
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
        </form >
    )
}

export default TaskListForm;
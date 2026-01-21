import { useState } from "react";
import Button from "../ui/Button";
import { useStatusHook } from "../../hooks/StatusFormHook";
import "./statusForm.css";
import { useAllTasks } from "../../services/task.service";
import Error from "../../utils/Error";
import Loading from "../../utils/Loading";
import type { ITaskModal } from "../../types/ITask";
import NoInfo from "../../utils/NoInfo";
import { useTaskCardForm } from "../../services/taskCard.service";

const PendingTask = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [deadline, setDeadline] = useState<string>("");
    const [taskID, setTaskID] = useState<number>(0);
    const { togglePendingFunc } = useStatusHook();

    const { data: tasks, isError, isLoading, error } = useAllTasks();
    const { mutateAsync: PendingTaskForm } = useTaskCardForm();

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        const status = 'pending';
        event.preventDefault();
        await PendingTaskForm({ taskID, title, description, status, deadline });
        togglePendingFunc();
    }

    if (isError) {
        return <Error
            title="Error getting task cards"
            details={error}
            onClose={() => { }}
            onRetry={() => { }} />
    }
    if (isLoading) return <Loading />
    if (tasks.length === 0) {
        return <NoInfo noInfo={"No task lists available go to Task List page!"} />
    }

    return (
        <form className="statusFormContainer" onSubmit={handleFormSubmit}>
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
                    onChange={(e) => setDeadline(e.target.value)}
                />
            </label>
            <label>
                Task List <br /> <br />
                <select name="" id="" required
                    onChange={(e) => setTaskID(Number(e.target.value))}
                    defaultValue={0}
                >
                    <option disabled value={0}>Select Category!</option>
                    {
                        tasks.map((t: ITaskModal) => (
                            <option key={t.taskID} value={t.taskID}>{t.category} ~ {t.priority}</option>
                        ))
                    }

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
                    onClick={() => togglePendingFunc()}
                >
                    Cancel
                </Button>
            </div>
        </form>

    );
}
export default PendingTask;
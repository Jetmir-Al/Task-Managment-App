import { useState } from "react";
import Button from "../ui/Button";
import { useStatusHook } from "../../hooks/StatusFormHook";
import "./statusForm.css";
import { useUpdToInProgress } from "../../services/taskCard.service";
import { useTaskStatus } from "../../services/task.service";
import Loading from "../../utils/Loading";
import Error from "../../utils/Error";
import type { ITaskCardProps } from "../../types/ITask";
import NoInfo from "../../utils/NoInfo";

const ProgressTask = () => {
    const [taskCard, setTaskCard] = useState<number>(0);
    const { toggleProgressFunc } = useStatusHook();
    const { mutateAsync: UpdateToInProgress } = useUpdToInProgress();
    const { isError, refetch, error, isLoading, data: statusTasks } = useTaskStatus();

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        UpdateToInProgress(taskCard);
        toggleProgressFunc();
    }

    if (isLoading) return <Loading />;
    if (isError) {
        return <Error
            title="Error getting task statuses"
            details={error}
            onRetry={() => {
                refetch();
            }} />
    }
    if (statusTasks?.pending.length === 0) return <NoInfo noInfo="No pending tasks to add" />

    return (
        <form className="ProgressFormContainer" id="progressForm" onSubmit={handleFormSubmit}>
            <h2>Making Progress</h2>
            <label>
                Task Card <br /> <br />
                <select name="" id="" required
                    onChange={(e) => setTaskCard(Number(e.target.value))}
                    defaultValue={0}
                >
                    <option disabled value={0}>Select card!</option>
                    {
                        statusTasks?.pending.map((t: ITaskCardProps) => (
                            <option key={t.taskCardID} value={t.taskCardID}>{t.title}</option>
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
                    onClick={() => toggleProgressFunc()}
                >
                    Cancel
                </Button>
            </div>
        </form>
    )
}
export default ProgressTask;
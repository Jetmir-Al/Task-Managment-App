import { useState } from "react";
import Button from "../ui/Button";
import { useStatusHook } from "../../hooks/StatusFormHook";
import "./statusForm.css";
import { useTaskStatus } from "../../services/task.service";
import Loading from "../../utils/Loading";
import Error from "../../utils/Error";
import type { ITaskCardProps } from "../../types/ITask";
import { useUpdToFinished } from "../../services/taskCard.service";



const CompletedTask = () => {
    const [taskCard, setTaskCard] = useState<number>(0);
    const { toggleCompletedFunc } = useStatusHook();
    const { isError, error, isLoading, data: statusTasks } = useTaskStatus();
    const { mutateAsync: updateTaskCard } = useUpdToFinished();
    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (taskCard !== 0) {
            await updateTaskCard(taskCard);
            toggleCompletedFunc();
        }
    }


    if (isLoading) return <Loading />;
    if (isError) {
        return <Error
            title="Error getting task statuses"
            details={error}
            onClose={() => { }}
            onRetry={() => { }} />
    }

    return (
        <form className="ProgressFormContainer" onSubmit={handleFormSubmit}>
            <h2>Finishing Tasks</h2>
            <label>
                Task Card <br /> <br />
                <select name="" id="" required
                    onChange={
                        (e) => setTaskCard(Number(e.target.value))
                    }
                    defaultValue={""}
                >
                    <option disabled value="">Select card!</option>
                    {
                        statusTasks?.pending.length === 0 ? null :
                            statusTasks?.pending.map((pen: ITaskCardProps) => (
                                <option key={pen.taskCardID} value={Number(pen.taskCardID)}>{pen.title}</option>
                            ))
                    }
                    {
                        statusTasks?.progress.length === 0 ? null :
                            statusTasks?.progress.map((pro: ITaskCardProps) => (
                                <option key={pro.taskCardID} value={Number(pro.taskCardID)}>{pro.title}</option>
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
                    onClick={() => toggleCompletedFunc()}
                >
                    Cancel
                </Button>
            </div>
        </form>
    )
}
export default CompletedTask;
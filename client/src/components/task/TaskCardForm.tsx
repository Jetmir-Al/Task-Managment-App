import { useState } from "react";
import "./taskForm.css"
import Button from "../ui/Button";
import { useTaskHook } from "../../hooks/TaskHook";
import Error from "../../utils/Error";
import { CreateTaskCard } from "../../api/taskCard.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const TaskCardForm = ({ taskID }: { taskID: number }) => {
    const { toggleTCard } = useTaskHook();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [deadline, setDeadline] = useState<string | null>(null);
    const queryClient = useQueryClient();

    const { mutateAsync: TaskFormFunc } = useMutation({
        mutationFn: async () => {
            return await CreateTaskCard(taskID, title, description, status, deadline);
        },
        onSuccess: () => {
            toggleTCard(taskID);
            queryClient.invalidateQueries(
                { queryKey: ['taskCards'] }
            );
        },
        onError: (error) => {
            return <Error
                title="Error getting task cards"
                details={error}
                onClose={() => { }}
                onRetry={() => { }}
            />
        }

    })

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        TaskFormFunc();
    }

    return (
        <form className="formContainer" onSubmit={handleFormSubmit}>
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
                    onChange={(e) => setDeadline(e.target.value)}
                />
            </label>
            <label>
                Status <br /> <br />
                <select name="" id="" required
                    onChange={(e) => setStatus(e.target.value)}
                    defaultValue={""}
                >
                    <option disabled value="">Select Status!</option>
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
                    onClick={() => toggleTCard(taskID)}
                >
                    Cancel
                </Button>
            </div>
        </form>
    )
}

export default TaskCardForm;
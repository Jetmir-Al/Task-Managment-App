import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Button from "../ui/Button";
import { useStatusHook } from "../../hooks/StatusFormHook";
import "./statusForm.css";

const PendingTask = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [deadline, setDeadline] = useState<string | null>(null);
    const [category, setCategory] = useState<number>();
    const queryClient = useQueryClient();
    const { togglePendingFunc } = useStatusHook();

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

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
                Category <br /> <br />
                <select name="" id="" required
                    onChange={(e) => setCategory(e.target.value)}
                    defaultValue={0}
                >
                    <option disabled value={0}>Select Category!</option>

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
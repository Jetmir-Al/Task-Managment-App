import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Button from "../ui/Button";
import { useStatusHook } from "../../hooks/StatusFormHook";
import "./statusForm.css";



const CompletedTask = () => {
    const [category, setCategory] = useState<number | string>();
    const queryClient = useQueryClient();
    const { toggleCompletedFunc } = useStatusHook();

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(category);
    }
    return (
        <form className="statusFormContainer" onSubmit={handleFormSubmit}>
            <label>
                Category <br /> <br />
                <select name="" id="" required
                    onChange={(e) => setCategory(e.target.value)}
                    defaultValue={0}
                >
                    <option disabled value={0}>Select Category!</option>
                    <option value={1}>Select Category!</option>
                    <option value={2}>Select Category!</option>

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
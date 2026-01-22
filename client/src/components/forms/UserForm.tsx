import { useUpdateForm } from "../../hooks/UpdForm";
import Button from "../ui/Button";
import "./userForm.css";

const UserForm = () => {
    const { toggleUpdFunc } = useUpdateForm();
    return (
        <div className="updateForm-container">
            <h1>hshsh</h1>
            <Button
                className=""
                type="button"
                onClick={() => toggleUpdFunc()}>
                Go Back
            </Button>
        </div>
    )
}

export default UserForm;
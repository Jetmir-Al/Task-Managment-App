import { useState } from "react";
import { useAuthHook } from "../../hooks/AuthHook";
import { useUpdateForm } from "../../hooks/UpdForm";
import NoInfo from "../../utils/NoInfo";
import Button from "../ui/Button";
import "./userForm.css";
import { useUpdateUser } from "../../services/users.service";

const UserForm = () => {
    const { toggleUpdFunc, toggleNameFunc, togglePswFunc, toggleEmailFunc, toggleEmail, toggleName, togglePsw } = useUpdateForm();
    const { user } = useAuthHook();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [psw, setPsw] = useState<string>("");
    const [newPsw, setNewPsw] = useState<string>("");
    const { mutateAsync: updateUser } = useUpdateUser();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(name, email, psw, newPsw);
        if (name !== "") {
            await updateUser(name);
        }
    }

    return (
        <div className="updateForm-container">
            <div className="update-presentation">

                <div className="listToUpdate">
                    <h2>Current!</h2>
                    <div className="listToUpdate-info">
                        <h4>
                            Current Name: {user?.name}
                        </h4>
                        <Button
                            type="button"
                            className=""
                            onClick={() => toggleNameFunc()}>
                            Update Name
                        </Button>
                        <h4>
                            Current Email: {user?.email}
                        </h4>
                        <Button
                            type="button"
                            className=""
                            onClick={() => toggleEmailFunc()}>
                            Update Email
                        </Button>
                        <Button
                            type="button"
                            className=""
                            onClick={() => togglePswFunc()}>
                            Update Password
                        </Button>
                    </div>
                </div>
                <form className="formToUpdate" onSubmit={handleSubmit}>
                    <h2>Update Form!</h2>
                    {
                        toggleName === false && togglePsw === false && toggleEmail === false ? <NoInfo noInfo="Select a field to update!" /> :
                            <>
                                {

                                    toggleName && (
                                        <label>
                                            Name: <br />
                                            <input type="text" required placeholder="Enter a new username!"
                                                onChange={(e) => setName(e.target.value)} />
                                        </label>
                                    )
                                }
                                {

                                    toggleEmail && (
                                        <label>
                                            Email: <br />
                                            <input type="email" required placeholder="Enter a new email!"
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </label>
                                    )
                                }
                                {
                                    togglePsw && (
                                        <label>
                                            Password: <br />
                                            <input type="password" required placeholder="Enter a old password!"
                                                onChange={(e) => setPsw(e.target.value)} />
                                            <br />
                                            New Password
                                            <input type="password" required placeholder="Enter a new password!"
                                                onChange={(e) => setNewPsw(e.target.value)} />
                                        </label>
                                    )
                                }

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
                                        onClick={() => toggleUpdFunc()}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </>
                    }

                </form>
            </div>
        </div>
    )
}

export default UserForm;
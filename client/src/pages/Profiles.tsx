import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth.api";
import Button from "../components/ui/Button";
import { useAuthHook } from "../hooks/AuthHook";
import "./pageStyles/profiles.css";
import { useMutation } from "@tanstack/react-query";
import Error from "../utils/Error";
import Loading from "../utils/Loading";
import { useTaskStatus } from "../services/task.service";
import { useDeleteAcc } from "../services/users.service";
import { useUpdateForm } from "../hooks/UpdForm";
import UserForm from "../components/forms/UserForm";

const Profiles = () => {

    const { user, setAuth, setUser } = useAuthHook();
    const { toggleUpdate, toggleUpdFunc } = useUpdateForm();
    const navigate = useNavigate();

    const { mutateAsync: logoutFunc } = useMutation({
        mutationFn: async () => {
            await logout();
        },
        onError: (error) => {
            return <Error
                title="Error loging out try later"
                details={error}
                onRetry={() => {
                    logout();
                }} />
        },
        onSuccess: () => {
            setAuth(false);
            setUser(null);
            navigate("/");
        }
    });
    const { mutateAsync: deleteAcc } = useDeleteAcc();


    const { isError, error, isLoading, refetch, data: taskLengths } = useTaskStatus();
    if (isLoading) return <Loading />;
    if (isError) {
        // return <div className="errorPage">
        //     <Error
        //         title="Error getting task info"
        //         details={error}
        //         onRetry={() => {
        //             refetch();
        //         }} />
        // </div>
        console.log(error);
    }
    const handleLogout = async () => {
        await logoutFunc();
    }
    if (toggleUpdate) return <UserForm />

    return (
        <div className="profiles-container">
            <div className="profile-info">
                <h2>{user?.name}</h2>
                <h3>{user?.email}</h3>
                <div>
                    <i>Tasks: {taskLengths?.pending?.length + taskLengths?.progress?.length + taskLengths?.finished?.length}</i>
                    <br />
                    <i>Completed: {taskLengths?.finished?.length}</i>
                </div>
                <div className="profile-btns">
                    <Button
                        onClick={() => toggleUpdFunc()}
                        type={"button"}
                        className={""}
                    >
                        Update
                    </Button>
                    <Button
                        onClick={() => handleLogout()}
                        type={"button"}
                        className={""}
                    >
                        Log out
                    </Button>

                    <Button
                        onClick={() => deleteAcc()}
                        type={"button"}
                        className={""}
                    >
                        Delete
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default Profiles
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth.api";
import Button from "../components/ui/Button";
import { useAuthHook } from "../hooks/AuthHook";
import "./pageStyles/profiles.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import Error from "../utils/Error";
import { FinishedTaskList, PendingTaskList, ProgressTaskList } from "../api/task.api";
import Loading from "../utils/Loading";

const Profiles = () => {

    const { user, setAuth, setUser } = useAuthHook();
    const navigate = useNavigate();

    const { mutateAsync: logoutFunc } = useMutation({
        mutationFn: async () => {
            await logout();
        },
        onError: (error) => {
            return <Error
                title="Error loging out try later"
                details={error}
                onClose={() => { }}
                onRetry={() => { navigate('/') }} />
        },
        onSuccess: () => {
            setAuth(false);
            setUser(null);
            navigate("/");
        }
    });
    const { isError, error, isLoading, data: taskLengths } = useQuery({
        queryKey: ["statusTasks", user?.userID],
        queryFn: async () => {
            const pending = await PendingTaskList(user?.userID);
            const progress = await ProgressTaskList(user?.userID); const finished = await FinishedTaskList(user?.userID);
            return { pending, progress, finished };
        }
    });
    if (isLoading) return <Loading />;
    if (isError) {
        return <Error
            title="Error getting task lengths"
            details={error}
            onClose={() => { }}
            onRetry={() => { }} />
    }
    const handleLogout = async () => {
        await logoutFunc();
    }

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
                        onClick={() => console.log("yup")}
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
                        onClick={() => console.log("yup")}
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
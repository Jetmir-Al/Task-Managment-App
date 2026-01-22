import { useMutation } from "@tanstack/react-query"
import { useAuthHook } from "../hooks/AuthHook"
import { deleteAcc } from "../api/auth.api";
import Error from "../utils/Error";
import { useNavigate } from "react-router-dom";


export const useDeleteAcc = () => {
    const { user, setAuth, setUser } = useAuthHook();
    const userID = user?.userID;
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async () => {
            return await deleteAcc(userID);
        },
        onError: (err) => {
            return <Error
                title="Error deleting the task"
                details={err}
                onClose={() => { }}
                onRetry={() => { }} />
        },
        onSuccess: (res) => {
            if (res.message === "User deleted") {
                setAuth(false);
                setUser(null);
                navigate('/');
            }
        },
    });

}
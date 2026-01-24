import { useMutation } from "@tanstack/react-query"
import { useAuthHook } from "../hooks/AuthHook"
import { deleteAcc, UpdateName } from "../api/auth.api";
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


export const useUpdateUser = () => {
    const { user } = useAuthHook();
    return useMutation({
        mutationFn: async (name: string) => {
            return await UpdateName(name, user?.userID);
        },
        onError: (err) => {
            return <Error
                title="Error updating user"
                details={err}
                onClose={() => { }}
                onRetry={() => { }} />
        },
        onSuccess: (res) => {
            // if (res.message === "User deleted") {
            //     setAuth(false);
            //     setUser(null);
            //     navigate('/');
            // }\
            console.log(res);
        },
    })
}
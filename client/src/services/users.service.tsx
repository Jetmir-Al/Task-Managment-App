import { useMutation } from "@tanstack/react-query"
import { useAuthHook } from "../hooks/AuthHook"
import { deleteAcc, UpdateEmail, UpdateName, UpdatePsw } from "../api/auth.api";
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


export const useUpdateUserName = () => {
    const { user } = useAuthHook();
    return useMutation({
        mutationFn: async (name: string) => {
            if (name !== "")
                return await UpdateName(name, user?.userID);
        },
    })
}


export const useUpdateUserEmail = () => {
    const { user } = useAuthHook();
    return useMutation({
        mutationFn: async (email: string) => {
            if (email !== "")
                return await UpdateEmail(email, user?.userID);
        },
    })
}

export const useUpdateUserPsw = () => {
    const { user } = useAuthHook();
    return useMutation({
        mutationFn: async ({ oldPsw, newPsw }: { oldPsw: string, newPsw: string }) => {
            if (oldPsw !== "" && newPsw !== "")
                return await UpdatePsw(oldPsw, newPsw, user?.userID);
        },
    })
}
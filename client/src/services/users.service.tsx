import { useMutation } from "@tanstack/react-query"
import { useAuthHook } from "../hooks/AuthHook"
import { deleteAcc, UpdateEmail, UpdateName, UpdatePsw } from "../api/auth.api";
import Error from "../utils/Error";
import { useNavigate } from "react-router-dom";


export const useDeleteAcc = () => {
    const { setAuth, setUser } = useAuthHook();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async () => {
            return await deleteAcc();
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
    return useMutation({
        mutationFn: async (name: string) => {
            if (name !== "")
                return await UpdateName(name);
        },
    })
}


export const useUpdateUserEmail = () => {
    return useMutation({
        mutationFn: async (email: string) => {
            if (email !== "")
                return await UpdateEmail(email);
        },
    })
}

export const useUpdateUserPsw = () => {
    return useMutation({
        mutationFn: async ({ oldPsw, newPsw }: { oldPsw: string, newPsw: string }) => {
            if (oldPsw !== "" && newPsw !== "")
                return await UpdatePsw(oldPsw, newPsw);
        },
    })
}
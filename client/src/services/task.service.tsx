import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthHook } from "../hooks/AuthHook";
import { PendingTaskList, ProgressTaskList, FinishedTaskList, allTasks, DeleteTaskList } from "../api/task.api";
import Error from "../utils/Error";

export const useDeleteTaskList = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (taskID: number) => {
            return await DeleteTaskList(taskID);
        },
        onError: (err) => {
            return <Error
                title="Error deleting the task"
                details={err}
                onClose={() => { }}
                onRetry={() => { }} />
        },
        onSuccess: (res) => {
            if (res.message === "Deleted Succesfully") {
                queryClient.invalidateQueries({
                    queryKey: ['taskLists']
                });
            }
        },
    });
}

export const useAllTasks = () => {
    const { user } = useAuthHook();

    return useQuery({
        queryKey: ['taskLists', user?.userID],
        queryFn: async () => {
            if (user) return await allTasks(user?.userID);
        },
        enabled: !!user,
    });
}

export const useTaskStatus = () => {
    const { user } = useAuthHook();

    return useQuery({
        queryKey: ["statusTasks", user?.userID],
        queryFn: async () => {
            const pending = await PendingTaskList(user?.userID);
            const progress = await ProgressTaskList(user?.userID);
            const finished = await FinishedTaskList(user?.userID);
            return { pending, progress, finished };
        },
        enabled: !!user,
    });
}

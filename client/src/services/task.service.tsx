import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

    return useQuery({
        queryKey: ['taskLists'],
        queryFn: async () => {
            return await allTasks();
        },
    });
}

export const useTaskStatus = () => {

    return useQuery({
        queryKey: ["statusTasks"],
        queryFn: async () => {
            const pending = await PendingTaskList();
            const progress = await ProgressTaskList();
            const finished = await FinishedTaskList();
            return { pending, progress, finished };
        },
    });
}

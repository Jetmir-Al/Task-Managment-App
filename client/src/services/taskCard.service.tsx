import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AllTasksCards, DeleteTaskCard, UpdFinishedTaskCard } from "../api/taskCard.api";
import Error from "../utils/Error";


export const useDeleteTaskCard = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (taskCardID: number) => {
            return await DeleteTaskCard(taskCardID);
        },
        onError: (error) => {
            <Error
                title="Error getting task statuses"
                details={error}
                onClose={() => { }}
                onRetry={() => { }} />
        },
        onSuccess: (res) => {
            if (res.message === "Deleted Succesfully") {
                queryClient.invalidateQueries({
                    queryKey: ['statusTasks']
                });
            }
        }
    })
}

export const useUpdToFinished = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (taskCardID: number) => {
            return await UpdFinishedTaskCard(taskCardID);
        },
        onError: (err) => {
            return <Error
                title="Error deleting the task"
                details={err}
                onClose={() => { }}
                onRetry={() => { }} />
        },
        onSuccess: (res) => {
            if (res.message === "Updated Succesfully") {
                queryClient.invalidateQueries({
                    queryKey: ['taskCards']
                });
                queryClient.invalidateQueries({
                    queryKey: ['statusTasks']
                });
            }
        }
    });
}

export const useAllTaskCards = (taskID: number) => {
    return useQuery({
        queryKey: ['taskCards', taskID],
        queryFn: async () => {
            const res = await AllTasksCards(taskID);
            return res;
        },
        enabled: !!taskID,
    });
}
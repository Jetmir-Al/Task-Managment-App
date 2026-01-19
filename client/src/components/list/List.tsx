import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ITaskCardProps, ITaskModal } from "../../types/ITask";
import NoInfo from "../../utils/NoInfo";
import ListHeader from "./ListHeader";
import { AllTasksCards, DeleteTaskCard, UpdFinishedTaskCard } from "../../api/taskCard.api";
import Error from "../../utils/Error";
import Loading from "../../utils/Loading";
import "./list.css";
import Button from "../ui/Button";

const List = ({ taskID, userID, category, priority }: ITaskModal) => {

    const queryClient = useQueryClient();

    const { data: tasks, isError, error, isLoading } = useQuery({
        queryKey: ['taskCards', taskID],
        queryFn: async () => {
            const res = await AllTasksCards(taskID);
            return res;
        }
    });

    const { mutateAsync: updateFinishedTask } = useMutation({
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
            }
        }
    });

    const { mutateAsync: deleteTask } = useMutation({
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
                    queryKey: ['taskCards']
                });
            }
        }
    });


    if (isError) {
        return <Error
            title="Error getting task cards"
            details={error}
            onClose={() => { }}
            onRetry={() => { }} />
    }
    if (isLoading) return <Loading />

    return (
        <div className="table-wrapper">
            <table className="tasksTable">
                {
                    tasks?.length === 0 ?
                        <thead className="noInfo-head">
                            <tr className="noInfo-row">
                                <NoInfo noInfo="No task lists here" />
                            </tr>
                        </thead>
                        :
                        <>
                            <ListHeader
                                priority={priority}
                                category={category}
                            />
                            <tbody>
                                {
                                    tasks?.map((t: ITaskCardProps, index: number) => (
                                        <tr className="task-row"
                                            key={index}>
                                            <td>{index + 1}</td>
                                            <td>{t.title}</td>
                                            <td>{t.description}</td>
                                            <td>{new Date(t.deadline).toDateString()}</td>
                                            <td>{t.status.toUpperCase()}</td>
                                            <td className='tableBtns'>
                                                {
                                                    t.status === "finished" ? null :
                                                        <Button
                                                            type="button"
                                                            className="addCompletedTask"
                                                            onClick={async () => await updateFinishedTask(t.taskCardID)}
                                                        >
                                                            Finished
                                                        </Button>
                                                }
                                                <Button
                                                    type="button"
                                                    className="delete-btn"
                                                    onClick={async () => await deleteTask(t.taskCardID)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </>
                }
            </table>
        </div>
    );
}

export default List;
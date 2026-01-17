import { useQuery } from "@tanstack/react-query";
import type { ITaskCardProps, ITaskModal } from "../../types/ITask";
import NoInfo from "../../utils/NoInfo";
import ListHeader from "./ListHeader";
import { AllTasksCards } from "../../api/taskCard.api";
import Error from "../../utils/Error";
import Loading from "../../utils/Loading";
import "./list.css";
import Button from "../ui/Button";

const List = ({ taskID, userID, category, priority }: ITaskModal) => {

    const { data: tasks, isError, error, isLoading } = useQuery({
        queryKey: ['taskCards', taskID],
        queryFn: async () => {
            const res = await AllTasksCards(taskID);
            return res;
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
                        <thead>
                            <tr className="loading-container">
                                <NoInfo noInfo="No task lists here" />
                            </tr>
                        </thead>
                        :
                        <>
                            <ListHeader

                            />
                            <tbody>
                                {
                                    tasks?.map((t: ITaskCardProps, index: number) => (
                                        <tr className="task-row"
                                            key={index}>
                                            <td>{index + 1}</td>
                                            <td>{t.title}</td>
                                            <td>{t.description}</td>
                                            <td>{new Date(t.createdAt).toDateString()}</td>
                                            <td className='tableBtns'>
                                                <Button
                                                    type="button"
                                                    className="update-btn"
                                                    onClick={() => { }}
                                                >
                                                    Update
                                                </Button>
                                                <Button
                                                    type="button"
                                                    className="delete-btn"
                                                    onClick={() => { }}
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
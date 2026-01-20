import TaskModal from "../components/task/TaskModal";
import type { ITaskModal } from "../types/ITask";
import NoInfo from "../utils/NoInfo";
import "./pageStyles/taskList.css";
import { useTaskHook } from "../hooks/TaskHook";
import TaskListForm from "../components/forms/TaskListForm";
import Error from "../utils/Error";
import Loading from "../utils/Loading";
import Button from "../components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { useTaskListHook } from "../hooks/TaskListHook";
import List from "../components/list/List";
import { useAllTasks } from "../services/task.service";

const TaskList = () => {
    const { toggleList, toggleListFunc } = useTaskListHook();
    const { toggleTaskList, toggleTList } = useTaskHook();

    const { data: tasks, isError, isLoading, error } = useAllTasks();

    if (isError) {
        return <Error
            title="Error getting task cards"
            details={error}
            onClose={() => { }}
            onRetry={() => { }} />
    }
    if (isLoading) return <Loading />

    return (
        <div className="taskModal-container">
            {
                toggleTaskList ? <TaskListForm /> : <>
                    <div className="taskModal-presentation">
                        <h2>My Tasks</h2>
                        <Button
                            className="taskModal-btn"
                            type="button"
                            onClick={() => toggleTList()}>
                            Add Task List
                        </Button>
                        <Button
                            className="taskModal-btn"
                            type="button"
                            onClick={() => toggleListFunc()}
                        >
                            {
                                toggleList ?
                                    <FontAwesomeIcon icon={faClipboard}
                                    />
                                    :
                                    <FontAwesomeIcon icon={faList} />
                            }
                        </Button>

                    </div>
                    <div className="taskList-presentation">
                        {
                            tasks?.length === 0 ? <NoInfo noInfo="No tasks yet" /> :
                                tasks?.map((tasks: ITaskModal) => (
                                    toggleList ?
                                        <List
                                            key={tasks.taskID}
                                            taskID={tasks.taskID}
                                            userID={tasks.userID}
                                            priority={tasks.priority}
                                            category={tasks.category}
                                        />
                                        :
                                        <TaskModal
                                            key={tasks.taskID}
                                            taskID={tasks.taskID}
                                            userID={tasks.userID}
                                            category={tasks.category}
                                            priority={tasks.priority}
                                        />
                                ))

                        }
                    </div>
                </>
            }
        </div>
    );
}

export default TaskList;
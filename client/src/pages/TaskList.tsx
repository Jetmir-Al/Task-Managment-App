import { useEffect, useState } from "react";
import TaskModal from "../components/task/TaskModal";
import { allTasks } from "../api/task.api";
import { useAuthHook } from "../hooks/AuthHook";
import type { ITaskModal } from "../types/ITask";
import NoInfo from "../utils/NoInfo";
import "./pageStyles/taskList.css";

const TaskList = () => {
    const [taskList, setTaskList] = useState<ITaskModal[]>();
    const { user } = useAuthHook();

    useEffect(() => {
        try {
            async function getTasks() {
                if (user) {
                    const tasks = await allTasks(user?.userID);
                    console.log(tasks[0]);
                    setTaskList(tasks);
                }
            }

            getTasks();
        } catch (error) {
            console.error(error);
        }
    }, [user]);

    return (
        <div className="taskModal-container">
            <div className="taskModal-presentation">
                <h2>My Tasks</h2>
            </div>
            {
                taskList?.length === 0 ? <NoInfo noInfo={"No tasks yet"} /> :
                    taskList?.map((task, index) => (
                        <TaskModal
                            key={index}
                            taskID={task.taskID}
                            userID={task.userID}
                            category={task.category}
                            priority={task.priority}
                        />
                    ))
            }
        </div>
    );
}

export default TaskList;
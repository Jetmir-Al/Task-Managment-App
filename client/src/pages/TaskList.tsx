import { useEffect, useState } from "react";
import TaskModal from "../components/task/TaskModal";
import { allTasks } from "../api/task.api";
import { useAuthHook } from "../hooks/AuthHook";
import type { ITaskModal } from "../types/ITask";

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
                {/* {user?.userID} */}
            </div>
            {
                taskList?.length === 0 ? <h1>{taskList[0].userID}</h1> : taskList && <h3>SSS type of junior ~~ {taskList[1].priority}</h3>
            }
            <TaskModal />
            <h1>Hey</h1>
        </div>
    );
}

export default TaskList;
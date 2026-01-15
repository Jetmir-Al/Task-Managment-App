import { RowDataPacket } from "mysql2";
import { db } from "../config/db";
import { ITask, ITaskStatus } from "../types/ITask";

export const TaskModal = {
    async AllTasks(userID: number): Promise<ITask | null> {
        const [results] = await db.execute<ITask & RowDataPacket[]>(
            `SELECT * FROM task 
            WHERE userID = ?`, [userID]
        );

        return results ?? null;
    },
    async createTaskList(userID: number, category: string, priority: string) {
        await db.execute(
            `INSERT INTO task 
            (userID, category, priority)
            VALUES (?, ?, ?);
            `, [userID, category, priority]
        )
    },
    async PendingTasks(userID: number): Promise<ITaskStatus | null> {
        const [results] = await db.execute<ITaskStatus & RowDataPacket[]>(
            `SELECT * FROM taskcard
            INNER JOIN task 
            ON taskcard.taskID = task.taskID
            WHERE userID = ? AND taskcard.status = 'pending'
            `, [userID]
        );
        return results ?? null;
    },
    async ProgressTasks(userID: number): Promise<ITaskStatus | null> {
        const [results] = await db.execute<ITaskStatus & RowDataPacket[]>(
            `SELECT * FROM taskcard
            INNER JOIN task 
            ON taskcard.taskID = task.taskID
            WHERE userID = ? AND taskcard.status = 'in progress'
            `, [userID]
        );
        return results ?? null;

    },
    async FinishedTasks(userID: number): Promise<ITaskStatus | null> {
        const [results] = await db.execute<ITaskStatus & RowDataPacket[]>(
            `SELECT * FROM taskcard
            INNER JOIN task 
            ON taskcard.taskID = task.taskID
            WHERE userID = ? AND taskcard.status = 'finished'
            `, [userID]
        );
        return results ?? null;

    }


}

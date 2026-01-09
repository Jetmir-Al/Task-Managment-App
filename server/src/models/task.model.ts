import { RowDataPacket } from "mysql2";
import { db } from "../config/db";
import { ITask } from "../types/ITask";

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
    }


}

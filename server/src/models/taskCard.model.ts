import { RowDataPacket } from "mysql2";
import { db } from "../config/db";
import { ITaskCard } from "../types/ITaskCard";

export const TaskCardModal = {
    async AllTaskCards(taskID: number): Promise<ITaskCard | null> {
        const [results] = await db.execute<ITaskCard & RowDataPacket[]>(
            `SELECT * FROM taskCard
            WHERE taskID = ?`, [taskID]
        );
        return results ?? null;
    }
}


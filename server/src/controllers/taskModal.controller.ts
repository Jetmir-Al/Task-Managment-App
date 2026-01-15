import { Request, Response } from "express";
import { CreateTaskListDTO, TaskDTO } from "../types/DTO/task.dto";
import { TaskModalSerice } from "../services/task.service";



export const AllTasks = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }

        const { userID }: TaskDTO = req.body;
        const userTasks = await TaskModalSerice.allUserTasks(userID);

        res.status(200).json(userTasks);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const InsertTaskList = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }

        const { userID, category, priority }: CreateTaskListDTO = req.body;
        await TaskModalSerice.createTask(userID, category, priority);

        res.status(200).json({ message: "Inserted succesfully" });

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const PendingTaskList = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }

        const { userID }: TaskDTO = req.body;
        const pending = await TaskModalSerice.pendingTasks(userID);
        res.status(200).json(pending);

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }

}
export const ProgressTaskList = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const { userID }: TaskDTO = req.body;
        const progress = await TaskModalSerice.progressTasks(userID);
        res.status(200).json(progress);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
export const FinishedTaskList = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const { userID }: TaskDTO = req.body;
        const finished = await TaskModalSerice.completedTasks(userID);
        res.status(200).json(finished);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
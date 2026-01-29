import { Request, Response } from "express";
import { TaskModalSerice } from "../services/task.service";
import { verifyToken } from "../utils/jwt";



export const AllTasks = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const payload = verifyToken(token);
        const userTasks = await TaskModalSerice.allUserTasks(payload.userID);

        res.status(200).json(userTasks);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const InsertTaskList = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const payload = verifyToken(token);
        const { category, priority } = req.body;
        await TaskModalSerice.createTask(payload.userID, category, priority);

        res.status(200).json({ message: "Inserted succesfully" });

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const PendingTaskList = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const payload = verifyToken(token);
        const pending = await TaskModalSerice.pendingTasks(payload.userID);
        res.status(200).json(pending);

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }

}
export const ProgressTaskList = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const payload = verifyToken(token);
        const progress = await TaskModalSerice.progressTasks(payload.userID);
        res.status(200).json(progress);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
export const FinishedTaskList = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const payload = verifyToken(token);
        const finished = await TaskModalSerice.completedTasks(payload.userID);
        res.status(200).json(finished);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const DeleteTaskList = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const { taskID } = req.body;
        await TaskModalSerice.deleteTask(taskID);
        res.status(200).json({ message: "Deleted Succesfully" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
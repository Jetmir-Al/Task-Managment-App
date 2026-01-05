import { Request, Response } from "express";
import { TaskDTO } from "../types/DTO/task.dto";
import { TaskModalSerice } from "../services/task.service";



export const AllTasks = async (req: Request, res: Response) => {
    try {
        const { userID }: TaskDTO = req.body;
        const userTasks = await TaskModalSerice.allUserTasks(userID);

        res.status(200).json(userTasks);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

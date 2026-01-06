import { Request, Response } from "express";
import { TaskCardDto } from "../types/DTO/taskCard.dto";
import { TaskCardService } from "../services/taskCard.service";
import { cookieConfig } from "../config/httpCookies";


export const AllTasksCards = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const { taskID }: TaskCardDto = req.body;
        const taskCards = await TaskCardService.allTaskCards(taskID);
        res.status(200).json(taskCards);

    } catch (error: any) {
        res.status(500).json({ message: error })
    }
}
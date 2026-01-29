import { Request, Response } from "express";
import { CreateTaskDTO, TaskCardDto } from "../types/DTO/taskCard.dto";
import { TaskCardService } from "../services/taskCard.service";


export const AllTasksCards = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const { taskID } = req.body;
        const taskCards = await TaskCardService.allTaskCards(taskID);
        res.status(200).json(taskCards);

    } catch (error: any) {
        res.status(500).json({ message: error })
    }
}

export const CreateTaskCard = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }

        const { taskID, title, description, status, deadline } = req.body;

        await TaskCardService.createTaskCard(taskID, title, description, status, deadline);
        res.status(200).json({ message: "Insert Succesfully" });

    } catch (error: any) {
        res.status(500).json({ message: error })
    }
}

export const DeleteTaskCard = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }

        const { taskCardID } = req.body;

        await TaskCardService.deleteTaskCard(taskCardID);
        res.status(200).json({ message: "Deleted Succesfully" });

    } catch (error: any) {
        res.status(500).json({ message: error })
    }
}

export const UpdFinishedTaskCard = async (req: Request, res: Response) => {
    try {


        const { taskCardID } = req.body;

        await TaskCardService.FinishedUpd(taskCardID);
        res.status(200).json({ message: "Updated Succesfully" });

    } catch (error: any) {
        res.status(500).json({ message: error })
    }
}
export const UpdInProgressTaskCard = async (req: Request, res: Response) => {
    try {

        const { taskCardID } = req.body;

        await TaskCardService.InProgressUpd(taskCardID);
        res.status(200).json({ message: "Updated Succesfully" });

    } catch (error: any) {
        res.status(500).json({ message: error })
    }
}
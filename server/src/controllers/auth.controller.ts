import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        await UserService.signup(name, email, password);

        res.status(201).json({ message: "User created" });
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
};

// login below
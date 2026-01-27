import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";

export interface AuthRequest extends Request {
    user?: {
        userID: number;
        name: string;
        email: string;
    }
}


export const requireAuth = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const token = req.cookies.user;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const user = await UserService.status(Number(token));
    if (!user) {
        return res.status(401).json({ message: "Invalid sesion" });
    }
    req.user = {
        userID: user.userID,
        name: user.name,
        email: user.email
    };
    next();
}
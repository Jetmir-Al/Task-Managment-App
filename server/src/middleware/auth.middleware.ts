import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { verify } from "node:crypto";
import { verifyToken } from "../utils/jwt";

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
    try {

        const token = req.cookies.access_token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const payload = verifyToken(token);
        const user = await UserService.status(payload.userID);
        if (!user) {
            return res.status(401).json({ message: "Invalid sesion" });
        }
        req.user = user;
        next();
    } catch {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}
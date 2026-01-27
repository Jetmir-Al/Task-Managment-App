import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { cookieConfig } from "../config/httpCookies";
import { LoginDTO, SingupDTO } from "../types/DTO/auth.dto";


export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password }: SingupDTO = req.body;
        await UserService.signup(name, email, password);

        res.status(201).json({ message: "User created" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password }: LoginDTO = req.body;
        const user = await UserService.login(email, password);
        const { httpOnly, maxAge, sameSite } = cookieConfig;
        res.cookie("user", user.userID, { httpOnly, maxAge, sameSite });

        res.status(200).json({ message: "Cookie set", user });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}


export const status = async (req: Request, res: Response) => {
    try {
        // to access http only cookies use 
        // req.cookies.cookieName 
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        //turning the token to a num
        const user = await UserService.status(Number(token));
        if (!user) {
            return res.status(401).json({ message: "Invalid sesion" });
        }

        return res.status(200).json({
            authenticated: true,
            user
        })

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}



export const logout = async (req: Request, res: Response) => {
    try {
        const { httpOnly, sameSite } = cookieConfig;
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }

        res.clearCookie('user', { httpOnly, sameSite });
        res.status(200).json({ message: "Cookie destroyed" });

    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}

export const DeleteUser = async (req: Request, res: Response) => {
    try {
        const { httpOnly, sameSite } = cookieConfig;
        const { userID } = req.body;
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }

        await UserService.deleteAcc(userID);
        res.clearCookie('user', { httpOnly, sameSite });
        res.status(200).json({ message: "User deleted" });

    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}

export const UpdateName = async (req: Request, res: Response) => {
    try {
        const { httpOnly, sameSite, maxAge } = cookieConfig;
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const { name, userID }: { name: string, userID: number } = req.body;

        const updatedName = await UserService.updName(name, userID);
        res.cookie("user", updatedName?.userID, { httpOnly, maxAge, sameSite });
        res.status(200).json({ message: "Name updated" });

    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}

export const UpdateEmail = async (req: Request, res: Response) => {
    try {
        const { httpOnly, sameSite, maxAge } = cookieConfig;
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const { email, userID }: { email: string, userID: number } = req.body;

        const updatedEmail = await UserService.updEmail(email, userID);
        res.cookie("user", updatedEmail?.userID, { httpOnly, maxAge, sameSite });
        res.status(200).json({ message: "Email updated" });

    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}

export const UpdatePsw = async (req: Request, res: Response) => {
    try {
        const { httpOnly, sameSite, maxAge } = cookieConfig;
        const token = req.cookies.user;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const { oldPsw, newPsw, userID }: { oldPsw: string, newPsw: string, userID: number } = req.body;

        const updatedPsw = await UserService.updPsw(oldPsw, newPsw, userID);
        res.cookie("user", updatedPsw?.userID, { httpOnly, maxAge, sameSite });
        res.status(200).json({ message: "Password updated" });

    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}
import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { cookieConfig } from "../config/httpCookies";
import { LoginDTO, SingupDTO } from "../types/DTO/auth.dto";
import { signToken, verifyToken } from "../utils/jwt";
import { HttpError } from "../http/http.error";


export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password }: SingupDTO = req.body;
        if (!email || !password || !name) {
            res.status(400).json({ message: "Invalid Credencials" });
        }

        await UserService.signup(name, email, password);

        res.status(201).json({ message: "User created" });
    } catch (error: any) {
        if (error instanceof HttpError) {
            return res.status(error.statusCode).json({ message: error.message });
        }

        res.status(500).json({ message: error.message });
    }
};


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password }: LoginDTO = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "Invalid Credencials" });
        }
        const user = await UserService.login(email, password);
        const token = signToken({ userID: user.userID });
        res.cookie("access_token", token, cookieConfig);
        res.status(200).json({ message: "User loged in!", user });
    } catch (error: any) {
        if (error instanceof HttpError) {
            return res.status(error.statusCode).json({ message: error.message });
        }

        res.status(500).json({ message: error.message });
    }
}


export const status = async (req: Request, res: Response) => {
    try {
        // to access http only cookies use 
        // req.cookies.cookieName 
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const payload = verifyToken(token)
        const user = await UserService.status(payload.userID);
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

        res.clearCookie('access_token', { httpOnly, sameSite });
        res.status(200).json({ message: "Loged out" });

    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}

export const DeleteUser = async (req: Request, res: Response) => {
    try {
        const { httpOnly, sameSite } = cookieConfig;
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const payload = verifyToken(token);
        await UserService.deleteAcc(payload.userID);
        res.clearCookie('access_token', { httpOnly, sameSite });
        res.status(200).json({ message: "User deleted" });

    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}

export const UpdateName = async (req: Request, res: Response) => {
    try {
        const { httpOnly, sameSite, maxAge } = cookieConfig;
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }

        const payload = verifyToken(token)
        const { name } = req.body;

        await UserService.updName(name, payload.userID);

        res.status(200).json({ message: "Name updated" });

    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}

export const UpdateEmail = async (req: Request, res: Response) => {
    try {
        const { httpOnly, sameSite, maxAge } = cookieConfig;
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }

        const payload = verifyToken(token);
        const { email } = req.body;

        await UserService.updEmail(email, payload.userID);
        res.status(200).json({ message: "Email updated" });

    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}

export const UpdatePsw = async (req: Request, res: Response) => {
    try {
        const { httpOnly, sameSite, maxAge } = cookieConfig;
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(404).json({ message: "Cookie not found" });
        }
        const payload = verifyToken(token);
        const { oldPsw, newPsw } = req.body;

        await UserService.updPsw(oldPsw, newPsw, payload.userID);
        res.status(200).json({ message: "Password updated" });

    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}
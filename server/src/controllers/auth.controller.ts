import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { cookieConfig } from "../config/httpCookies";

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        await UserService.signup(name, email, password);

        res.status(201).json({ message: "User created" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        await UserService.login(email, password);
        const { httpOnly, maxAge, sameSite } = cookieConfig;
        res.cookie("user", "userLogedIn", { httpOnly, maxAge, sameSite });
        res.status(200).json({ message: "Cookie set" });

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}


export const status = async (req: Request, res: Response) => {
    try {
        // to access http only cookies use 
        // req.cookies.cookieName 
        const token = req.cookies.user;
        res.status(200).json({ message: token });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}



export const logout = async (req: Request, res: Response) => {
    try {
        const { httpOnly, sameSite } = cookieConfig;

        res.clearCookie('user', { httpOnly, sameSite });
        res.status(200).json({ message: "Cookie destroyed" });

    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}
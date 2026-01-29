import { Request, Response, NextFunction } from "express";


type ValidatorFn<T> = (body: any) => body is T;

export const validateBody = <T>(validator: ValidatorFn<T>) => (req: Request, res: Response, next: NextFunction) => {
    if (!validator(req.body)) {
        return res.status(400).json({
            message: "Invalid request body",
        });
    }

    next();
}
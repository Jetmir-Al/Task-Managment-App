import { CookieOptions } from "express";
const isProduction = process.env.NODE_ENV === "production";

export const cookieConfig: CookieOptions = {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
};


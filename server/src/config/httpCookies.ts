import { CookieOptions } from "express";

export const cookieConfig: CookieOptions = {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "lax"
};


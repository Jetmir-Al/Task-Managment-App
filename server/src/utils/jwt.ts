import jwt, { Secret, SignOptions } from "jsonwebtoken";

const JWT_SECRET: Secret = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN: SignOptions["expiresIn"] = (process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"]) || "7d";

export interface JwtPayload {
    userID: number;
}

export const signToken = (payload: JwtPayload): string => {
    const options: SignOptions = {
        expiresIn: JWT_EXPIRES_IN,
    }
    return jwt.sign(payload, JWT_SECRET, options);
};

export const verifyToken = (token: string): JwtPayload => {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
};

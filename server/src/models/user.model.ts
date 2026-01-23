import { db } from "../config/db";
import { IUser } from "../types/IUser";
//destructure the result and give it types
import { RowDataPacket } from "mysql2";


export const UserModel = {
    async create(name: string, email: string, password: string) {
        const [result] = await db.execute(
            `INSERT INTO users 
            (name, email, passwordHash)
            VALUES
            (?, ?, ?)
            `, [name, email, password]
        );
        return result;
    },

    async findByEmail(email: string): Promise<IUser | null> {
        const [rows] = await db.execute<IUser[] & RowDataPacket[]>(
            `SELECT * FROM users WHERE email = ?`,
            [email]
        );
        // ?? null -> converts undefined to null 
        return rows[0] ?? null;
    },

    async findByID(userID: number): Promise<IUser | null> {
        const [user] = await db.execute<IUser[] & RowDataPacket[]>(
            `SELECT * FROM users WHERE userID = ?`, [userID]
        );
        return user[0] ?? null;
    },

    async deleteUser(userID: number) {
        await db.execute(
            `DELETE FROM users WHERE userID = ?`, [userID]
        );
    },

    async UpdateName(name: string, userID: number) {
        await db.execute(
            `UPDATE users SET name = ? WHERE users.userID = ?;
            `, [name, userID]
        );
    },
    async UpdateEmail(email: string, userID: number) {
        await db.execute(
            `UPDATE users SET email = ? WHERE users.userID = ?;
            `, [email, userID]
        );
    },
    async UpdatePsw(password: string, userID: number) {
        await db.execute(
            `UPDATE users SET passwordHash = ? WHERE users.userID = ?;
            `, [password, userID]
        );
    }
}
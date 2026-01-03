import { db } from "../config/db";
import { IUser } from "../types/IUser";
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

    async findByEmail(email: string): Promise<IUser> {
        const rows = await db.execute(
            `SELECT * FROM users
            WHERE email = ?
            `, [email]
        );
        return rows;
    }
}
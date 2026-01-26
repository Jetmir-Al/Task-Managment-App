import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model";
import { UserReponseDTO } from "../types/DTO/auth.dto";



export const UserService = {

    async signup(name: string, email: string, password: string) {
        const userExists = await UserModel.findByEmail(email);

        if (userExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await bcrypt.hash(password, 10);

        return await UserModel.create(name, email, passwordHash);
    },

    async login(email: string, password: string): Promise<UserReponseDTO> {
        const user = await UserModel.findByEmail(email);

        if (!user) {
            throw new Error("Invalid credentials");
        }
        // console.log(user);
        const isMatch = await bcrypt.compare(password, user.passwordHash);

        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        return {
            userID: user.userID,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
        };
    },

    async status(userID: number) {
        const userInfo = await UserModel.findByID(userID);
        if (!userInfo) return null;

        return {
            userID: userInfo.userID,
            name: userInfo.name,
            email: userInfo.email,
            createdAt: userInfo.createdAt
        }
    },

    async deleteAcc(userID: number) {
        await UserModel.deleteUser(userID);
    },

    async updName(name: string, userID: number) {
        const upd = await UserModel.UpdateName(name, userID);
        if (upd.message !== "updated name!") {
            throw new Error("Problem with updating");
        }
        const userInfo = await UserModel.findByID(userID);
        if (!userInfo) return null;

        return {
            userID: userInfo.userID,
            name: userInfo.name,
            email: userInfo.email,
            createdAt: userInfo.createdAt
        }
    },

    async updEmail(email: string, userID: number) {
        const upd = await UserModel.UpdateEmail(email, userID);
        if (upd.message !== "updated email!") {
            throw new Error("Problem with updating");
        }

        const userInfo = await UserModel.findByID(userID);
        if (!userInfo) return null;

        return {
            userID: userInfo.userID,
            name: userInfo.name,
            email: userInfo.email,
            createdAt: userInfo.createdAt
        }
    },
    async updPsw(oldPsw: string, newPsw: string, userID: number) {

        const userInfo = await UserModel.findByID(userID);

        if (!userInfo) {
            throw new Error("Invalid credentials");
        }
        const isMatch = await bcrypt.compare(oldPsw, userInfo.passwordHash);

        if (!isMatch) {
            throw new Error("Invalid credentials");
        }
        const passwordHash = await bcrypt.hash(newPsw, 10);

        await UserModel.UpdatePsw(passwordHash, userID);

        return {
            userID: userInfo.userID,
            name: userInfo.name,
            email: userInfo.email,
            createdAt: userInfo.createdAt
        }
    }

}
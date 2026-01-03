import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";


export const UserService = {

    async signup(name: string, email: string, password: string) {
        const userExists = await UserModel.findByEmail(email);

        if (!userExists) {
            throw new Error("User already exists");
        }

        // hash password in future, chose best option in express
        const passwordHash = await bcrypt.hash(password, 10);

        return await UserModel.create(name, email, passwordHash);
    },

    async login(email: string, password: string) {
        const userExists = await UserModel.findByEmail(email);

        if (!userExists) {
            throw new Error("Invalid Credencials");
        }
        const checkPsw = await bcrypt.compare(password, userExists.passwordHash);
        if (!checkPsw) {
            throw new Error("Invalid Credencials");
        }
        return userExists;
    }

}
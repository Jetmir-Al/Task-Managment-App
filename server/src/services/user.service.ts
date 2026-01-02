import { UserModel } from "../models/user.model";


export const UserService = {

    async signup(name: string, email: string, password: string) {
        const userExists = await UserModel.findByEmail(email);

        if ((userExists as any[]).length > 0) {
            throw new Error("User already exists");
        }

        // hash password in future, chose best option in express


        return await UserModel.create(name, email, password);
    },

    async login(email: string, password: string) {
        const userExists = await UserModel.findByEmail(email);

        if ((userExists as any[]).length === 0) {
            throw new Error("Invalid Credencials");
        }

        return userExists;
    }

}
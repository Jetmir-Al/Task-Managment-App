import { TaskModal } from "../models/task.model"


export const TaskModalSerice = {

    async allUserTasks(userID: number) {
        const allTasks = await TaskModal.AllTasks(userID);
        return allTasks;
    }

    // async signup(name: string, email: string, password: string) {
    //     const userExists = await UserModel.findByEmail(email);

    //     if (userExists) {
    //         throw new Error("User already exists");
    //     }

    //     const passwordHash = await bcrypt.hash(password, 10);

    //     return await UserModel.create(name, email, passwordHash);
    // },

}
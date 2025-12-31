import { createContext } from "react";


interface IToggle {
    toggleAccount: boolean;
    toggleAcc?: () => void | null;
    loginSignup: boolean;
    toggleLoginSignup: () => void | null;
}
export const DefaultValues = {
    toggleAccount: false,
    toggleAcc: () => console.log(""),
    loginSignup: true,
    toggleLoginSignup: () => console.log("")
}


export const AccountToggle = createContext<IToggle>(DefaultValues);
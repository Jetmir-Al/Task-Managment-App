import { createContext } from "react";


interface IToggle {
    toggleAccount: boolean;
    loginSignup: boolean;
    toggleAcc: () => void;
    toggleLoginSignup: () => void;
}

export const AccountToggleContext = createContext<IToggle | null>(null);
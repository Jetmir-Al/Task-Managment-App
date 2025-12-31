import { useContext } from "react";
import { AccountToggleContext } from "../context/AccountToggleContext";

export const useAccountToggle = () => {
    const context = useContext(AccountToggleContext);
    if (!context) {
        throw new Error("Problem with context!");

    }
    return context;
}
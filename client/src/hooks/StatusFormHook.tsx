import { useContext } from "react";
import { FormToggleContext } from "../context/FormToggleContext";


export const useStatusHook = () => {
    const context = useContext(FormToggleContext);
    if (!context) {
        throw new Error("Problem with context!");

    }
    return context;
}
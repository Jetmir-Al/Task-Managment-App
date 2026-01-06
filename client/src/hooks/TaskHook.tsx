import { useContext } from "react";
import { ToggleTaskContext } from "../context/ToggleTaskContext";

export const useTaskHook = () => {
    const context = useContext(ToggleTaskContext);
    if (!context) {
        throw new Error("Problem with context!");

    }
    return context;
}

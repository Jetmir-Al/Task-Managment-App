import { useContext } from "react";
import { ToggleListContext } from "../context/ToggleListContext";



export const useTaskListHook = () => {
    const context = useContext(ToggleListContext);

    if (!context) {
        throw new Error("Problem with context!");
    }

    return context;
}
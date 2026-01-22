import { useContext } from "react";
import { ToggleUpdContext } from "../context/ToggleUpdContext";


export const useUpdateForm = () => {
    const context = useContext(ToggleUpdContext);
    if (!context) {
        throw new Error("Problem with context");
    }
    return context;
}
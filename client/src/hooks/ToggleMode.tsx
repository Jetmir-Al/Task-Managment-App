import { useContext } from "react";
import { ToggleLightDarkContext } from "../context/LightDarkModeContext";

export const useToggleLightDark = () => {
    const context = useContext(ToggleLightDarkContext);
    if (!context) {
        throw new Error("Context problem!");
    }
    return context;
}
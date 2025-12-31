import { useContext } from "react";
import { ToggleLightDarkContext } from "../context/LightDarkModeContext";

export const useToggleLightDark = () => {
    return useContext(ToggleLightDarkContext);
}
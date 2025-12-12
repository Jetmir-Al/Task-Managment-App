import { useContext } from "react";
import { ToggleLightDarkContext } from "../context/LightDarkMode";

export const useToggleLightDark = () => {
    return useContext(ToggleLightDarkContext);
}
import { createContext } from "react";

interface ICurrentMode {
    mode: boolean;
    toggleMode?: () => void;

}
export const defaultState = {
    mode: false,
    toggleMode: () => console.log(""),
};

export const ToggleLightDarkContext = createContext<ICurrentMode>(defaultState);
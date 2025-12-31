import { createContext } from "react";

interface ICurrentMode {
    mode: boolean;
    toggleMode?: () => void;

}
export const defaultState: ICurrentMode = {
    mode: false,
    toggleMode: () => { },
};

export const ToggleLightDarkContext = createContext<ICurrentMode>(defaultState);
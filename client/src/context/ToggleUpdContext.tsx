import { createContext } from "react";

interface IUpdateContext {
    toggleUpdate: boolean,
    toggleUpdFunc: () => void,
    toggleName: boolean,
    toggleNameFunc: () => void,
    togglePsw: boolean,
    togglePswFunc: () => void
}

export const ToggleUpdContext = createContext<IUpdateContext | null>(null);
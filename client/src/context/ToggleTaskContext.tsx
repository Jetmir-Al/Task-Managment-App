import { createContext } from "react";

interface IToggle {
    toggleTaskList: boolean;
    toggleTaskCard: boolean;
    toggleTList: () => void;
    toggleTCard: () => void;
}

export const ToggleTaskContext = createContext<IToggle | null>(null);

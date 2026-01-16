import { createContext } from "react";

interface IToggle {
    toggleTaskList: boolean;
    toggleTaskCard: boolean;
    taskIDForm: number | 0;
    toggleTList: () => void;
    toggleTCard: (taskID: number) => void;
}

export const ToggleTaskContext = createContext<IToggle | null>(null);

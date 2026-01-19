import { createContext } from "react";

export interface IFormToggle {
    toggleStatusPending: boolean;
    toggleStatusProgress: boolean;
    toggleStatusCompleted: boolean;
    togglePendingFunc: () => void;
    toggleProgressFunc: () => void;
    toggleCompletedFunc: () => void;
}


export const FormToggleContext = createContext<IFormToggle | null>(null);
import { createContext } from "react";

export interface IToggleList {
    toggleList: boolean;
    toggleListFunc: () => void;
}

export const ToggleListContext = createContext<IToggleList | null>(null)
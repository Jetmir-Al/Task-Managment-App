import { createContext, useState } from "react";
import type { ReactNode } from "react";
import React from "react";

interface ICurrentMode {
    mode: boolean;
    toggleMode?: () => void;

}
const defaultState = {
    mode: false,
    toggleMode: () => console.log(""),
};

export const ToggleLightDarkContext = createContext<ICurrentMode>(defaultState);

interface IToggleLightDarkProviderProps {
    children: ReactNode;
}


export const ToggleLightDarkProvider: React.FC<IToggleLightDarkProviderProps> = ({ children }) => {
    const [mode, setMode] = useState(defaultState.mode)

    const toggleMode = () => {
        setMode(m => !m);
    };

    return (
        <ToggleLightDarkContext.Provider
            value={{
                mode,
                toggleMode,
            }}
        >
            {children}
        </ToggleLightDarkContext.Provider>
    );
} 
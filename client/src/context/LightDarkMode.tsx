import { useState } from "react";
import type { ReactNode } from "react";
import React from "react";
import { ToggleLightDarkContext, defaultState } from "./LightDarkModeContext";


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
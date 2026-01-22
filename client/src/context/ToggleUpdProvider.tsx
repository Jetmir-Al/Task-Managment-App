import { ToggleUpdContext } from "./ToggleUpdContext";
import { useState, type ReactNode } from "react";

interface IToggleUpdProvider {
    children: ReactNode
}

export const ToggleUpdProvider = ({ children }: IToggleUpdProvider) => {
    const [toggleUpdate, setToggleUpd] = useState<boolean>(false);
    const [toggleName, setToggleName] = useState<boolean>(false);
    const [togglePsw, setTogglePsw] = useState<boolean>(false);

    const toggleUpdFunc = () => {
        setToggleUpd(u => !u);
    }
    const toggleNameFunc = () => {
        setToggleName(n => !n);
    }
    const togglePswFunc = () => {
        setTogglePsw(p => !p);
    }
    return (
        <ToggleUpdContext.Provider
            value={{
                toggleUpdate,
                toggleUpdFunc,
                toggleName,
                toggleNameFunc,
                togglePsw,
                togglePswFunc
            }}>
            {children}
        </ToggleUpdContext.Provider>
    )
}



import { useState, type ReactNode } from "react";
import { ToggleTaskContext } from "./ToggleTaskContext";

interface IToggleTaskForms {
    children: ReactNode
}
export const ToggleTaskFormProvider = ({ children }: IToggleTaskForms) => {
    const [toggleTaskList, setToggleTaskList] = useState<boolean>(false);
    const [toggleTaskCard, setToggleTaskCard] = useState<boolean>(false);

    const toggleTList = () => {
        setToggleTaskList(l => !l);
    };
    const toggleTCard = () => {
        setToggleTaskCard(c => !c);
    }

    return (
        <ToggleTaskContext.Provider
            value={{
                toggleTaskList,
                toggleTaskCard,
                toggleTList,
                toggleTCard
            }}
        >
            {children}
        </ToggleTaskContext.Provider>
    );
}
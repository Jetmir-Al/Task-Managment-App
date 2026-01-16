import { useState, type ReactNode } from "react";
import { ToggleTaskContext } from "./ToggleTaskContext";

interface IToggleTaskForms {
    children: ReactNode
}
export const ToggleTaskFormProvider = ({ children }: IToggleTaskForms) => {
    const [toggleTaskList, setToggleTaskList] = useState<boolean>(false);
    const [toggleTaskCard, setToggleTaskCard] = useState<boolean>(false);
    const [taskIDForm, setTaskIDForm] = useState<number>(0);

    const toggleTList = () => {
        setToggleTaskList(l => !l);
    };
    const toggleTCard = (taskID: number) => {
        setToggleTaskCard(c => !c);
        setTaskIDForm(taskID);
    }

    return (
        <ToggleTaskContext.Provider
            value={{
                toggleTaskList,
                toggleTaskCard,
                taskIDForm,
                toggleTList,
                toggleTCard
            }}
        >
            {children}
        </ToggleTaskContext.Provider>
    );
}
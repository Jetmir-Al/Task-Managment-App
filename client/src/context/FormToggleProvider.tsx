import { FormToggleContext } from "./FormToggleContext";
import { useState, type ReactNode } from "react";


interface IProviderProp {
    children: ReactNode;
}

export const FormToggleProvider = ({ children }: IProviderProp) => {
    const [toggleStatusPending, setTogglePending] = useState<boolean>(false);
    const [toggleStatusProgress, setToggleProgress] = useState<boolean>(false);
    const [toggleStatusCompleted, setToggleCompleted] = useState<boolean>(false);

    const togglePendingFunc = () => {
        setTogglePending(p => !p);
    }
    const toggleProgressFunc = () => {
        setToggleProgress(p => !p);
    }
    const toggleCompletedFunc = () => {
        setToggleCompleted(c => !c);
    }


    return (
        <FormToggleContext value={{
            toggleStatusPending,
            toggleStatusProgress,
            toggleStatusCompleted,
            togglePendingFunc,
            toggleProgressFunc,
            toggleCompletedFunc
        }}>
            {children}
        </FormToggleContext>
    )
}

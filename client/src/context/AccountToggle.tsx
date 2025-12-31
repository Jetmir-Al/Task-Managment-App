import { useState, type ReactNode } from "react";
import { AccountToggleContext } from "./AccountToggleContext";


interface IToggleAccountProps {
    children: ReactNode
}

export const AccountToggleProvider = ({ children }: IToggleAccountProps) => {
    const [toggleAccount, setToggleAccount] = useState(false);
    const [loginSignup, setLoginSignup] = useState(true);

    const toggleAcc = () => {
        setToggleAccount(t => !t);
    };
    const toggleLoginSignup = () => {
        setLoginSignup(l => !l);
    }

    return (
        <AccountToggleContext.Provider
            value={{
                toggleAccount,
                loginSignup,
                toggleAcc,
                toggleLoginSignup,
            }}
        >
            {children}
        </AccountToggleContext.Provider>
    );
}
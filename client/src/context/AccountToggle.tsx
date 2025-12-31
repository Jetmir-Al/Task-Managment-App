import { useState, type ReactNode } from "react";
import { DefaultValues, AccountToggle } from "./AccountToggleContext";


interface IToggleAccountProps {
    children: ReactNode
}

export const AccountToggleProvider: React.FC<IToggleAccountProps> = ({ children }) => {
    const [toggleAccount, setToggleAccount] = useState(DefaultValues.toggleAccount);
    const [loginSignup, setLoginSignup] = useState(DefaultValues.loginSignup);

    const toggleAcc = () => {
        setToggleAccount(t => !t);
    };
    const toggleLoginSignup = () => {
        setLoginSignup(l => !l);
    }

    return (
        <AccountToggle.Provider
            value={{ toggleAccount, toggleAcc, loginSignup, toggleLoginSignup }}
        >
            {children}
        </AccountToggle.Provider>
    );
}
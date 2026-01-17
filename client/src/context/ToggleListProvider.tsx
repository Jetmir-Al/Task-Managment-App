import type { ReactNode } from "react";
import { useState } from "react";
import { ToggleListContext } from "./ToggleListContext";


interface IToggleProvider {
    children: ReactNode;
}


export const ToggleListProvider = ({ children }: IToggleProvider) => {
    const [toggleList, setToggleList] = useState<boolean>(false);

    const toggleListFunc = () => {
        setToggleList(t => !t);
    }

    return (
        <ToggleListContext.Provider
            value={{
                toggleList,
                toggleListFunc
            }}
        >
            {children}
        </ToggleListContext.Provider>
    );

}
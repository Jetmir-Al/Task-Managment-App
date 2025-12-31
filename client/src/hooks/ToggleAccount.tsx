import { useContext } from "react";
import { AccountToggle } from "../context/AccountToggleContext";

export const useAccountToggle = () => {
    return useContext(AccountToggle);
}
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthHook = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Problem with context!");

    }
    return context;
}

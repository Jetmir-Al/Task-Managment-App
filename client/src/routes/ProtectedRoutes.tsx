import { Navigate, Outlet } from "react-router-dom";
import { useAuthHook } from "../hooks/AuthHook";

const ProtectedRoutes = () => {
    const { authenticated } = useAuthHook();
    if (authenticated) return <Outlet />
    else return <Navigate to="/" />
}

export default ProtectedRoutes;
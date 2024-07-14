import { useSelector } from "react-redux";
import { getTokenUser } from "../providers/StoreProvider/selectors/getTokenUser";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface privateRouteProps {
    children: ReactNode
}

function PrivateRoute({children}: privateRouteProps) {
    const token = useSelector(getTokenUser);
    if(!token) {
        return <Navigate to={'/'} replace />
    }
    return children
}

export default PrivateRoute
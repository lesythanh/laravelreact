import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren



const AuthMiddleware = ({children} : ProtectedRouteProps) => {

    const navigate = useNavigate();
    const {isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    if(!isAuthenticated || user === null) {
        navigate('/admin');
    }else {
        return children
    }

    // useEffect(() => {
    //     console.log(isAuthenticated, user);
        
    //     // if(!isAuthenticated) {
    //     //     window.location.href = '/login';
    //     // }else if(user) {
    //     //     window.location.href = '/';
    //     // }

    // }, [isAuthenticated, user]); 
    
    console.log(children);
    return children;
}

export default AuthMiddleware;

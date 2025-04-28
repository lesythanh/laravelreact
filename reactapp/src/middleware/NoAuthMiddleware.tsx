import { PropsWithChildren, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../services/AuthService";


type ProtectedRouteProps = PropsWithChildren

const NoAuthMiddleware = ({children} : ProtectedRouteProps) => {

    const navigate = useNavigate();
    const {isAuthenticated, user } = useSelector((state: RootState) => state.auth);
    const [ checkedAuth, setCheckedAuth ] = useState<boolean>(false);

    useEffect(() => {

        const checkAuthentication = async () => {
            try {
                const userData = await fetchUser();
                if(userData !== null) {
                    navigate('/dashboard');
                }else {
                    setCheckedAuth(true);
                }
            } catch (error) {
                setCheckedAuth(true);
            }

        }

        if(!isAuthenticated || user === null){
            checkAuthentication();
        }else {
            navigate('/dashboard');
        }

    }, [isAuthenticated, user]); 

    return checkedAuth ? children : null;
}

export default NoAuthMiddleware;

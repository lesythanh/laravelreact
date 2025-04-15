import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../services/AuthService";
import { setAuthLogin, setAuthLogout } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";


type ProtectedRouteProps = PropsWithChildren



const AuthMiddleware = ({children} : ProtectedRouteProps) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    useEffect(() => {

        const checkAuthentication = async () => {
            if(!isAuthenticated || user === null) {
                const userData = await fetchUser();
                if(userData) {
                    dispatch(setAuthLogin(userData));
                } else {
                    dispatch(setAuthLogout());
                    navigate('/admin');
                }
            }
        }
        checkAuthentication();

    }, [isAuthenticated, user, dispatch, navigate]); 

    return isAuthenticated && user ? children : null;

}

export default AuthMiddleware;

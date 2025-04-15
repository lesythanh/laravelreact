import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { showToast } from "../helpers/myHelper";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { clearToast } from "../redux/slice/toastSlice";
import { fetchUser } from "../services/AuthService";
import { setAuthLogin } from "../redux/slice/authSlice";

const Layout: React.FC = () => {

    const {message, type } = useSelector((state: RootState) => state.toast);
    const dispatch = useDispatch();

    useEffect(() => {
        showToast(message, type)
        dispatch(clearToast())
    }, [message, type]); 

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                đây là layout
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;

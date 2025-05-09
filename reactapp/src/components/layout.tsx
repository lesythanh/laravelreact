import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { showToast } from "../helpers/myHelper";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { clearToast } from "../redux/slice/toastSlice";
import Header from "./Header";
import Aside from "./Aside";
import '../assets/scss/Style.scss'

const Layout: React.FC = () => {

    const {message, type } = useSelector((state: RootState) => state.toast);
    const dispatch = useDispatch();

    useEffect(() => {
        showToast(message, type)
        dispatch(clearToast())
    }, [message, type]); 

    return (
        <div className="page">
                {/* <Header /> */}
                <Aside />
                <div className="main-content">
                    <Outlet />
                </div>
        </div>
    );
}

export default Layout;

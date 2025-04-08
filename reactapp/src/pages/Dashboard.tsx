// import { useToast } from "../contexts/ToastContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { showToast } from "../helpers/myHelper";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { clearToast } from "../redux/slice/toastSlice";


const Dashboard = () => {

    // const { message,type, setMessage } = useToast();

    const {message, type } = useSelector((state: RootState) => state.toast);
    const dispatch = useDispatch();

    useEffect(() => {
            
        showToast(message, type)
        dispatch(clearToast())

    }, [message, type]);    

    return (
        <>
            <div>
                <h1>Dashboard Page</h1>
            </div>
        </>
    )
}

export default Dashboard;
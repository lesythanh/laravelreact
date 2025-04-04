import { useToast } from "../contexts/ToastContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { showNotify } from "../helpers/myHelper";


const Dashboard = () => {

    const { message,type, setMessage } = useToast();

    useEffect(() => {
        if (message) {
            showNotify(message, type, setMessage);
        }
    }, [message,type, setMessage]);    

    return (
        <>
            <div>
                <h1>Dashboard Page</h1>
            </div>
        </>
    )
}

export default Dashboard;
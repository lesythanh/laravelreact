import axios from "axios";
import { toast } from "react-toastify";

const handleAxiosError = (error: unknown): void => {

    if(axios.isAxiosError(error)) {
        if(error.response && error.response.data && error.response.data.error) {
            // toast.error(error.response.data.error);
        }else{
            // toast.error("Network error. Please try again later.");
        }
    }else {
        // toast.error("Đã xảy ra lỗi không xác định. Vui lòng thử lại sau.");
    }
}

export { handleAxiosError };
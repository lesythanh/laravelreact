import { handleAxiosError } from "../helpers/axiosHelpers";
import axiosInstance from "../configs/axios";
import { setAuthLogin } from "../redux/slice/authSlice";
import { User } from "../types/User";

type LoginPayload = {
    email: string
    password: string
}


const login = async (payload:LoginPayload): Promise<User | null> => {
    try {

        const response = await axiosInstance.post('/auth/login', {
            email: payload.email,
            password: payload.password,
        });

        return response.data.user;
        
    } catch (error) {
        handleAxiosError(error);
        return null;
    }
}

export { login }
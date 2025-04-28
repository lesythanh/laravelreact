import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const API_URL = 'https://laravelreact/api/v1/'

const apiCall: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

const refreshToken = async () => {
    try {
        const response = await apiCall.post('auth/refresh');
        console.log(response);
        
    } catch (error) {
        throw new Error('Failed to refresh token');
    }
}

axios.interceptors.response.use(
    response => {
        return response;
    },
    async (error) => {

        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        if(error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const userData = await refreshToken();
                return apiCall(originalRequest);
                
            } catch (error) {
                return Promise.reject(error);
            }
        }


        return Promise.reject(error);
    }
);

axios.defaults.withCredentials = true
axios.defaults.baseURL = API_URL
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export default axios;
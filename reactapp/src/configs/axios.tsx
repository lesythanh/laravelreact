import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://laravelreact/api/v1/",
    headers: {
        "Content-Type": "application/json",
    },
})

axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default axiosInstance;
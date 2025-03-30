import axiosInstance from "../configs/axios";


type LoginPayload = {
    email: string
    password: string
}


const login = async (payload:LoginPayload) => {
    try {

        const response = await axiosInstance.post('/auth/login');
        console.log( response);
        

    } catch (error) {
        console.log(error);
    }
    // return axiosInstance.post("/login", payload)
    //     .then((response) => {
    //         if (response.data && response.data.access_token) {
    //             localStorage.setItem("access_token", response.data.access_token);
    //         }
    //         return response.data;
    //     })
    //     .catch((error) => {
    //         console.error("Login error:", error);
    //         throw error;
    //     });
}


export { login }
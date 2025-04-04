import { useForm, SubmitHandler } from "react-hook-form"
import { login } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useToast } from "../contexts/ToastContext";


type Inputs = {
    email: string
    password: string
}

const Login = () => {

    const { setMessage } = useToast();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>();
    
      const loginHandler: SubmitHandler<Inputs> = async (payload) => {

        const logged = await login(payload);

        setMessage('Đăng nhập vào hệ thống thành công', 'success');
        logged && navigate("/dashboard");
      }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit(loginHandler)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input 
                        type="email"
                        id="email"
                        placeholder=""
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                        {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input 
                        type="password"
                        id="password"
                        placeholder=""
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                        {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-red-500 text-xs">Password is required</span>}
                    </div>
                    <div className="mb-6">
                        <button 
                        type="submit"
                        className="w-full px-3 py-3 text-white bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-400"
                        >
                            Login
                        </button>
                    </div>
                    <p className="text-center text-gray-500 text-sm">
                        <a href="#" className="text-blue-500">Forgot Password</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;
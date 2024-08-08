import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GridBoxLayout from '../../components/common/GridBoxLayout';
import { ReactComponent as Google } from '../../assets/google_logo.svg';
import { ReactComponent as EyeOpen } from '../../assets/eye_open.svg';
import { ReactComponent as EyeClose } from '../../assets/eye_close.svg';
import { useLoginMutation } from '../../api/auth';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [login] = useLoginMutation()

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        const data = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        const response = await login(data)
    }

    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className="relative min-h-screen w-full bg-gray-900 flex items-center justify-center">
            {/* Grid background that covers the entire screen */}
            <GridBoxLayout />

            {/* Main content */}
            <div className="relative z-10 space-y-6 w-full max-w-md mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
                <div className="text-center text-white">
                    <h1 className="text-2xl font-bold mb-2">Sign in to your account</h1>
                    <p className="text-gray-300 text-sm">Enter your email and password below to access your account.</p>
                </div>
                <form className="flex flex-col gap-4" onSubmit={formSubmitHandler}>
                    <button className="inline-flex w-fit mx-auto items-center justify-center bg-gray-200 text-black text-sm font-medium rounded-md h-10 px-4 hover:bg-gray-300">
                        <Google className="mr-2" />
                        Sign in with Google
                    </button>
                    <div class="flex items-center justify-center">
                        <div class="flex-grow border-t border-gray-300"></div>
                        <span class="mx-4 text-gray-500">OR</span>
                        <div class="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div>
                        <label htmlFor="email" className="text-white text-sm font-medium">Email address</label>
                        <input id="email" placeholder="name@example.com" type="email" className="h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 text-sm text-white outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500" />
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="text-white text-sm font-medium">Password</label>
                            <a href="#" className="text-gray-300 text-sm hover:underline">Forgot password?</a>
                        </div>
                        <div className="relative">
                            <input id="password" placeholder="••••••••" type={showPassword ? "text" : "password"} className="h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 pr-10 text-sm text-white outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500" />
                            <button type="button" className="absolute bottom-1.5 right-1 h-7 w-7" onClick={showPasswordHandler}>
                                {showPassword ? <EyeOpen /> : <EyeClose />}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="inline-flex items-center justify-center bg-gray-200 text-black text-sm font-medium rounded-md h-10 px-4 hover:bg-gray-300">
                        Login
                    </button>

                </form>
                <p className="text-center text-gray-400 text-sm">
                    Don't have an account?{' '}
                    <button onClick={() => navigate('/register')} className="text-gray-300 hover:underline font-medium">Sign up</button>
                </p>
            </div>
        </div>
    )
}

export default Login;


import React, { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import useAuth from '../context/useAuth';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const data = await login(formData.email, formData.password);

            console.log("LOGIN RESPONSE:", data);
            console.log("USER ROLE:", data?.user?.role);

            if (data.user?.role === "admin") {
                navigate("/admin", { replace: true });
            } else {
                const originPath = location.state?.from?.pathname;
                navigate(originPath || "/", { replace: true });
            }

        } catch (error) {
            console.error("Login attempt failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='min-h-screen flex justify-center items-center px-4 py-8 sm:px-6 bg-[rgb(255,248,220)]'>

            <div className='w-full max-w-5xl min-h-[550px] bg-white border-2 sm:border-3 rounded-xl shadow-[3px_3px_0px_#000] flex flex-col md:flex-row overflow-hidden'>

                {/* Branding Section */}
                <div className='flex-1 bg-[#FFD400] border-b-2 md:border-b-0 md:border-r-3 p-6 sm:p-10 flex flex-col justify-between gap-10 md:gap-0'>

                    <div className='w-fit px-5 py-1 rounded-full border-2 sm:border-3 bg-white flex items-center gap-1 shadow-[3px_3px_0px_#000] -rotate-3'>
                        <img
                            src="/assets/unibox-logo.svg"
                            alt="logo-kuttan"
                            className='w-8 sm:w-9'
                        />
                        <h1 className='text-lg sm:text-xl'>UNIBOX</h1>
                    </div>

                    <div className='space-y-3 sm:space-y-5'>
                        <h1 className='text-3xl sm:text-4xl'>WELCOME BACK,</h1>
                        <h1 className='text-3xl sm:text-4xl'>UNIBOXER!!</h1>

                        <p className='text-stone-600 text-sm sm:text-base leading-relaxed max-w-md'>
                            Your saved mystery carts, live tracking status and unlocked collector perks are waiting inside!!
                        </p>
                    </div>

                </div>

                {/* Login Form Section */}
                <div className='flex-1 flex flex-col justify-center p-6 sm:p-10'>

                    <h1 className='text-2xl sm:text-3xl'>LOG IN</h1>

                    <p className='text-sm text-stone-600 mt-2'>
                        Enter your details to unlock and crack open your box
                    </p>

                    <p className='text-sm text-stone-600 pt-4'>
                        New to Unibox? 
                        <Link to="/register" className='text-black font-medium ml-1 hover:underline'>
                            Register
                        </Link>
                    </p>

                    <form onSubmit={handleSubmit} className='flex flex-col pt-8 sm:pt-10 gap-4'>

                        <label className='text-sm sm:text-base'>
                            EMAIL ADDRESS <span className='text-red-600'>*</span>
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='you@unibox.com'
                            required
                            className='border-2 w-full px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'
                        />

                        <label className='text-sm sm:text-base'>
                            PASSWORD <span className='text-red-600'>*</span>
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='*********'
                            required
                            className='border-2 w-full px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'
                        />

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='border-2 w-full px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] bg-[#FFD400] hover:bg-[#00d300ee] hover:text-white transition disabled:opacity-60 disabled:cursor-not-allowed'
                        >
                            {isSubmitting ? "LOGGING IN..." : "LOG IN"}
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Login

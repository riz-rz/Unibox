
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../context/useAuth';
import { UserPlus } from 'lucide-react';

const Signup = () => {

    const navigate = useNavigate();
    const { register } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        avatar: ''
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
            await register(formData);
            navigate("/login");
        } catch (error) {
            console.error("Registration error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-stretch lg:items-start px-4 sm:px-6 lg:px-10 py-8 lg:py-12 gap-6'>

            {/* Branding Section */}
            <div className='flex-1 min-w-0 h-fit bg-[#FFD400] border-2 sm:border-3 rounded-xl p-6 sm:p-10 flex flex-col gap-8 sm:gap-10'>

                <div className='w-fit px-5 py-1 rounded-full border-2 sm:border-3 bg-white flex items-center gap-1 shadow-[3px_3px_0px_#000] -rotate-3'>
                    <img
                        src="/assets/unibox-logo.svg"
                        alt="logo-kuttan"
                        className='w-8 sm:w-9'
                    />
                    <h1 className='text-lg sm:text-xl'>UNIBOX</h1>
                </div>

                <div className='space-y-2'>
                    <h1 className='text-3xl sm:text-4xl'>CRACK OPEN</h1>
                    <h1 className='text-3xl sm:text-4xl underline decoration-red-600'>
                        THE UNKNOWN
                    </h1>

                    <p className='text-stone-600 text-sm sm:text-base leading-relaxed'>
                        Your saved mystery carts, live tracking status and unlocked collector perks are waiting inside!!
                    </p>
                </div>

                <div className='flex justify-center'>
                    <img
                        src="/assets/box-boy.png"
                        alt="box boy chilling here"
                        className='w-full max-w-xs sm:max-w-sm lg:max-w-md object-contain'
                    />
                </div>

            </div>

            {/* Signup Form */}
            <div className='flex-1 min-w-0 bg-white border-2 sm:border-3 rounded-xl shadow-[3px_3px_0px_#000] flex flex-col p-6 sm:p-10'>

                <h1 className='text-2xl sm:text-3xl'>CREATE YOUR ACCOUNT</h1>

                <p className='text-sm text-stone-600 mt-2'>
                    Set up your collector identity and primary shipping destination.
                </p>

                <p className='text-sm text-stone-600 pt-4'>
                    Already have an account?
                    <Link to="/login" className='text-black ml-1 font-medium hover:underline'>
                        Login
                    </Link>
                </p>

                <form onSubmit={handleSubmit} className='flex flex-col pt-6 gap-4'>

                    {/* Role Selection */}
                    <label className='text-sm'>Select Role:</label>

                    <div className='flex w-full gap-4'>
                        <button
                            type="button"
                            className='flex-1 border-2 p-2 rounded-xl shadow-[3px_3px_0px_#000] cursor-pointer bg-[#FFD400]'
                        >
                            USER
                        </button>

                        <button
                            type="button"
                            className='flex-1 border-2 p-2 rounded-xl shadow-[3px_3px_0px_#000] cursor-pointer'
                        >
                            ADMIN
                        </button>
                    </div>

                    {/* Form Fields */}
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>

                        <div className='min-w-0'>
                            <label className='text-sm'>
                                FULL NAME <span className='text-red-600'>*</span>
                            </label>

                            <input
                                onChange={handleChange}
                                name='name'
                                value={formData.name}
                                type="text"
                                placeholder='Enter your name'
                                required
                                className='border-2 w-full mt-1 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'
                            />
                        </div>

                        <div className='min-w-0'>
                            <label className='text-sm'>
                                EMAIL ADDRESS <span className='text-red-600'>*</span>
                            </label>

                            <input
                                onChange={handleChange}
                                name='email'
                                value={formData.email}
                                type="email"
                                placeholder='Enter your email'
                                required
                                className='border-2 w-full mt-1 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'
                            />
                        </div>

                        <div className='min-w-0'>
                            <label className='text-sm'>
                                PHONE NUMBER <span className='text-red-600'>*</span>
                            </label>

                            <input
                                onChange={handleChange}
                                name='phone'
                                value={formData.phone}
                                type="tel"
                                placeholder='Enter your phone number'
                                required
                                className='border-2 w-full mt-1 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'
                            />
                        </div>

                        <div className='min-w-0'>
                            <label className='text-sm'>
                                PASSWORD <span className='text-red-600'>*</span>
                            </label>

                            <input
                                onChange={handleChange}
                                name='password'
                                value={formData.password}
                                type="password"
                                placeholder='************'
                                required
                                className='border-2 w-full mt-1 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'
                            />
                        </div>

                    </div>

                    {/* Avatar */}
                    <div className='w-full'>
                        <label className='text-sm'>
                            AVATAR <span className='text-red-600'>*</span>
                        </label>

                        <input
                            onChange={handleChange}
                            name='avatar'
                            value={formData.avatar}
                            type="text"
                            placeholder='Enter your avatar URL'
                            required
                            className='border-2 w-full mt-1 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className='border-2 w-full px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] bg-red-800 text-white flex justify-center items-center gap-2 hover:bg-red-900 transition disabled:opacity-60 disabled:cursor-not-allowed'
                    >
                        {isSubmitting ? (
                            <>
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                <span>Creating Account...</span>
                            </>
                        ) : (
                            <>
                                <UserPlus size={16} />
                                <span>Register</span>
                            </>
                        )}
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Signup

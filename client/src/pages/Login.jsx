
import React, { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/login", {
                method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData)
            });

            const data = await res.json();

            console.log(data);


            if (!res.ok) {
                alert(data.message || "Login failed");
                return;
            }

            setFormData({
                email:"",
                password:""
            })

        } catch (error) {
            console.log("Error while logging in:", error);
        }
    };

    return (
        <div className='h-screen flex justify-center pt-15'>
            <div className='w-250 h-120 bg-white border-3 rounded-xl shadow-[3px_3px_0px_#000] flex'>

                <div className='h-full flex-1 bg-[#FFD400] border-r-3 rounded-tl-xl rounded-bl-xl p-10 space-y-20'>
                    <div className='w-fit px-5 py-1 rounded-full border-3 bg-white flex items-center gap-1 shadow-[3px_3px_0px_#000] -rotate-3'>
                        <img src="./assets/unibox-logo.svg" alt="logo-kuttan" className='w-9' />
                        <h1 className='text-xl'>UNIBOX</h1>
                    </div>

                    <div className='space-y-5'>
                        <h1 className='text-4xl'>WELCOME BACK,</h1>
                        <h1 className='text-4xl'>UNIBOXER!!</h1>
                        <p className='text-stone-600'>your saved mystery carts, live tracking status and unlocked collector perks are waiting inside!!</p>
                    </div>
                </div>

                <div className='flex-1 flex flex-col p-10'>
                    <h1 className='text-2xl'>LOG IN</h1>
                    <p className='text-sm text-stone-600'>Enter your details to unlock and crack open your box</p>

                    <p className='text-sm text-stone-600 pt-4'>
                        New to Unibox? <a href="/signup"><span className='text-black'>Register</span></a>
                    </p>

                    <form onSubmit={handleSubmit} className='flex flex-col pt-10 gap-4'>

                        <label>EMAIL ADDRESS <span className='text-red-600'>*</span></label>

                        <input type="email"  name="email" value={formData.email} onChange={handleChange} placeholder='you@unibox.com' required className='border-2 w-90 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none' />

                        <label>PASSWORD <span className='text-red-600'>*</span></label>

                        <input type="password" name="password"  value={formData.password}  onChange={handleChange}  placeholder='*********'  required className='border-2 w-90 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none' />

                        <button type="submit" className='border-2 w-90 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] bg-[#FFD400] hover:bg-[#00d300ee] hover:text-white'>
                            LOG IN
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

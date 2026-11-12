
import React from 'react'

const Signup = () => {
  return (
     <div className=' flex justify-center items-start pt-15 px-20 gap-4'>
        <div className='flex-1 h-fit bg-[#FFD400] border-3 rounded-xl p-10 space-y-10'>
            <div className='w-fit px-5 py-1 rounded-full border-3 bg-white flex items-center gap-1 shadow-[3px_3px_0px_#000] -rotate-3'>
                <img src="./assets/unibox-logo.svg" alt="logo-kuttan" className='w-9' />
                <h1 className='text-xl'>UNIBOX</h1>
            </div>
            <div className='space-y-2'>
                <h1 className='text-4xl'>CRACK OPEN</h1>
                <h1 className='text-4xl underline decoration-red-600'>THE UNKNOWN</h1>
                <p className='text-stone-600'> your saved mystery carts,live tracking status and unlocked collector perks are waiting inside!!</p>
            </div>
            <div className=''>
                <img src="/assets/box-boy.png" alt="box boy chilling here" />
            </div>
        </div>
        <div className='flex-1 bg-white border-3 rounded-xl shadow-[3px_3px_0px_#000] flex flex-col p-10'>
            <h1 className='text-2xl'>CREATE YOUR ACCOUNT</h1>
            <p className='text-sm text-stone-600'>Set up your collector idetity and primary shipping destination.</p>
            <form action="" className='flex flex-col pt-10 gap-4'>
                <label htmlFor="">Select Role:</label>
                <div className='flex w-full gap-4'>
                    <button className='flex-1 border-2 p-2 rounded-xl shadow-[3px_3px_0px_#000] bg-[#FFD400]'>USER</button>
                    <button className='flex-1 border-2 p-2 rounded-xl shadow-[3px_3px_0px_#000] '>ADMIN</button>
                </div>
                <div className='w-full grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='text-sm'>FULL NAME <span className='text-red-600'>*</span></label>
                        <input type="text" placeholder='enter your name' className='border-2  px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    </div>
                    <div>
                        <label htmlFor="" className='text-sm'>EMAIL ADDRESS <span className='text-red-600'>*</span></label>
                        <input type="text" placeholder='enter your email address' className='border-2 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    </div>
                    <div>
                        <label htmlFor="" className='text-sm'>PHONE NUMBER <span className='text-red-600'>*</span></label>
                        <input type="text" placeholder='enter your phone number' className='border-2 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    </div>
                    <div>
                        <label htmlFor="" className='text-sm'>PASSWORD<span className='text-red-600'>*</span></label>
                        <input type="text" placeholder='************' className='border-2 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    </div>
                </div>
                <label htmlFor="">AVATAR<span className='text-red-600'>*</span></label>
                <input type="text" placeholder='enter your avatar url' className='border-2 w-90 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                <h1>SHIPPING ADDRESS:-</h1>
                <div className='grid grid-cols-2 w-full gap-4'>
                     <div>
                        <label htmlFor="" className='text-sm'>FULL NAME<span className='text-red-600'>*</span></label>
                        <input type="text" placeholder='enter your name' className='border-2 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    </div>
                     <div>
                        <label htmlFor="" className='text-sm'>SHIPPING PHONE<span className='text-red-600'>*</span></label>
                        <input type="text" placeholder='enter your phone number' className='border-2 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    </div>
                     <div className='col-span-2 flex flex-col'>
                        <label htmlFor="" className='text-sm'>STREET ADDRESS<span className='text-red-600'>*</span></label>
                        <input type="text" placeholder='enter your street' className='border-2 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    </div>
                     <div>
                        <label htmlFor="" className='text-sm'>CITY<span className='text-red-600'>*</span></label>
                        <input type="text" placeholder='enter your city' className='border-2 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    </div>
                     <div>
                        <label htmlFor="" className='text-sm'>STATE<span className='text-red-600'>*</span></label>
                        <input type="text" placeholder='enter your state' className='border-2 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    </div>
                     <div>
                        <label htmlFor="" className='text-sm'>PIN CODE<span className='text-red-600'>*</span></label>
                        <input type="text" placeholder='enter your pin' className='border-2 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    </div>
                     <div>
                        <label htmlFor="" className='text-sm'>COUNTRY<span className='text-red-600'>*</span></label>
                        <input type="text" placeholder='enter your country' className='border-2 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    </div>
                </div>
                
                <button className='border-2 w-full px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] bg-red-800 text-white '>
                    SIGN UP
                </button>
            </form>
        </div>
    </div>
  )
}

export default Signup

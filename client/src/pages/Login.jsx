import React from 'react'

const Login = () => {
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
                    <p className='text-stone-600'> your saved mystery carts,live tracking status and unlocked collector perks are waiting inside!!</p>
                </div>
            </div>
            <div className='flex-1 flex flex-col p-10 '>
                <h1 className='text-2xl'>LOG IN</h1>
                <p className='text-sm text-stone-600'>Enter your details to unlock and crack open your box</p>
                <form action="" className='flex flex-col pt-10 gap-4'>
                    <label htmlFor="">EMAIL ADDRESS <span className='text-red-600'>*</span></label>
                    <input type="text" placeholder='you@unibox.com' className='border-2 w-90 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    <label htmlFor="">PASSWORD <span className='text-red-600'>*</span></label>
                    <input type="text" placeholder='*********' className='border-2 w-90 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] outline-none'/>
                    <button className='border-2 w-90 px-4 py-3 rounded-xl shadow-[3px_3px_0px_#000] bg-[#FFD400] hover:bg-[#00d300ee] hover:text-white'>
                        LOG IN
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
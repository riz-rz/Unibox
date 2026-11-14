import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col px-10 w-sce'>
        <div className='h-screen  px-10  flex gap-5'>
            <div className='flex-1 flex flex-col pt-20 gap-6'>
                <div className=''>
                    <h1 className='text-7xl'>Open Up.</h1>
                    <h1 className='text-7xl'>Everything's</h1>
                    <h1 className='text-7xl bg-[#FFD400] rounded-xl'>Inside.</h1>
                </div>
                <p className='text-lg text-stone-700'>Gadgets, goodies and everyday treasures,  all packed <br /> into one happy  little box. New surprises drop every <br /> Friday.</p>
                <div className='flex gap-4'>
                    <button className=' border-2 px-20 py-4 rounded-xl shadow-[3px_3px_0px_#000] cursor-pointer bg-[#FFD400] hover:-rotate-2'>SHOP NOW</button>
                    <button className=' border-2 px-20 py-4 rounded-xl shadow-[3px_3px_0px_#000] cursor-pointer bg-white  hover:rotate-2'> EXPLORE  </button>
                </div>
            </div>
            <div className='flex-1  flex justify-center items-center relative'>
                <div className='bg-[#FFD400] w-85 h-130 rounded-xl rotate-5 shadow-[3px_3px_0px_#000] border-2'> </div>
                <div className='bg-[rgb(236,224,196)] w-85 h-120 rounded-xl -rotate-4 shadow-[3px_3px_0px_#000] border-2 absolute'>
                    <img src="/assets/home-box.jfif" alt="box-home" className='object-contain h-full' />
                </div>
                <img src="/assets/sticker (2).svg" alt="rando-sticker" className='absolute w-25 bottom-10 left-20    ' />
                <img src="/assets/sticker (3).svg" alt="rando-sticker" className='absolute w-25 top-20 right-20    ' />
                <img src="/assets/sticker (1).svg" alt="rando-sticker" className='absolute w-25 bottom-50 right-0    ' />
            </div>
        </div>
        <div className=' h-15 border-y-2 -rotate-1 bg-sky-700 -mx-10 flex items-center '>
                 <div className='marquee flex whitespace-nowrap gap-10 text-white text-xl'>
                     {[1, 2].map((item) => (
                         <span key={item}>
                             ✱ Free shipping over $75 ✱ Mystery box Fridays ✱ Free shipping over $75
                         </span>
                     ))}

                </div>     
         </div>
         <div className='h-100 bg-white border-y-4 mt-20 -mx-10  pl-10 py-10 flex flex-col justify-center gap-10'>
            <h1 className='text-3xl'>Think inside the box! </h1>
            <div className='flex justify-around'>
                <div className='w-65 h-50 bg-[#1FB85A] p-5 border-2 shadow-[3px_3px_0px_#000] rounded-xl rotate-2  '>
                     <h1 className='text-white text-3xl border-b'>Tech</h1>
                </div>
                <div className='w-65 h-50 bg-[#E63B2E] p-5 border-2 shadow-[3px_3px_0px_#000] rounded-xl -rotate-2  '>
                     <h1 className='text-white text-3xl border-b'>Home</h1>
                </div>
                <div className='w-65 h-50 bg-[#FFD400] p-5 border-2 shadow-[3px_3px_0px_#000] rounded-xl rotate-2  '>
                     <h1 className=' text-3xl border-b'>Fashion</h1>
                </div>
                <div className='w-65 h-50 bg-[#2B6CFF] p-5 border-2 shadow-[3px_3px_0px_#000] rounded-xl -rotate-2  '>
                     <h1 className=' text-3xl border-b'>Bags</h1>
                </div>
            </div>
         </div>
         <div className='w-full h-60 bg-[#2B6CFF] mt-20 border-2 shadow-[3px_3px_0px_#000] rounded-xl flex justify-between items-center px-20 '>
            <div>
                <h1 className='text-white text-3xl'>Gift it in a box that smiles back.</h1>
                <p className='text-stone-300'>Add free gift wrap and a handwritten note at checkout. We'll hide the price, <br /> you take the credit.</p>
            </div>
                <button className=' border-2 h-fit px-20 py-4 rounded-xl shadow-[3px_3px_0px_#000] cursor-pointer bg-[#FFD400] hover:-rotate-2 '>SHOP GIFT</button>
         </div>
    </div>
  )
}

export default Home
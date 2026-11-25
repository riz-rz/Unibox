
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col px-4 sm:px-6 lg:px-10 bg-[rgb(255,248,220)] overflow-hidden'>

      {/* Hero Section */}
      <div className='min-h-screen py-10 lg:py-0 px-2 sm:px-4 lg:px-0 flex flex-col lg:flex-row gap-10 lg:gap-5'>

        {/* Hero Content */}
        <div className='flex-1 flex flex-col justify-center pt-5 lg:pt-10 gap-6'>

          <div>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl'>Open Up.</h1>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl'>Everything's</h1>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl bg-[#FFD400] rounded-xl w-fit px-2'>Inside.</h1>
          </div>

          <p className='text-base sm:text-lg text-stone-700 leading-relaxed'>
            Gadgets, goodies and everyday treasures, all packed
            into one happy little box. New surprises drop every Friday.
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <Link to="/products">
              <button className='w-full sm:w-auto border-2 px-10 sm:px-12 lg:px-16 py-4 rounded-xl shadow-[3px_3px_0px_#000] cursor-pointer bg-[#FFD400] hover:-rotate-2 transition'>
                SHOP NOW
              </button>
            </Link>

            <button className='w-full sm:w-auto border-2 px-10 sm:px-12 lg:px-16 py-4 rounded-xl shadow-[3px_3px_0px_#000] cursor-pointer bg-white hover:rotate-2 transition'>
              EXPLORE
            </button>
          </div>

        </div>

        {/* Hero Image */}
        <div className='flex-1 min-h-[380px] sm:min-h-[500px] lg:min-h-0 flex justify-center items-center relative'>

          <div className='bg-[#FFD400] w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[32rem] rounded-xl rotate-5 shadow-[3px_3px_0px_#000] border-2'></div>

          <div className='bg-[rgb(236,224,196)] w-64 h-72 sm:w-72 sm:h-[22rem] lg:w-80 lg:h-[30rem] rounded-xl -rotate-4 shadow-[3px_3px_0px_#000] border-2 absolute overflow-hidden'>
            <img
              src="/assets/home-box.jfif"
              alt="box-home"
              className='object-contain h-full w-full'
            />
          </div>

          <img
            src="/assets/sticker (2).svg"
            alt="random sticker"
            className='absolute w-16 sm:w-20 lg:w-25 bottom-5 sm:bottom-10 left-2 sm:left-10 lg:left-20'
          />

          <img
            src="/assets/sticker (3).svg"
            alt="random sticker"
            className='absolute w-16 sm:w-20 lg:w-25 top-5 sm:top-10 lg:top-20 right-2 sm:right-10 lg:right-20'
          />

          <img
            src="/assets/sticker (1).svg"
            alt="random sticker"
            className='absolute w-16 sm:w-20 lg:w-25 bottom-20 sm:bottom-32 right-0'
          />

        </div>
      </div>

      {/* Marquee Section */}
      <div className='min-h-14 sm:h-15 border-y-2 -rotate-1 bg-sky-700 -mx-4 sm:-mx-6 lg:-mx-10 flex items-center overflow-hidden'>

        <div className='marquee flex whitespace-nowrap gap-10 text-white text-base sm:text-xl'>
          {[1, 2].map((item) => (
            <span key={item}>
              ✱ Free shipping over $75 ✱ Mystery box Fridays ✱ Free shipping over $75
            </span>
          ))}
        </div>

      </div>

      {/* Categories Section */}
      <div className='min-h-[400px] bg-[rgb(255,248,220)] border-y-4 mt-12 sm:mt-16 lg:mt-20 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-8 lg:px-10 py-10 flex flex-col justify-center gap-8 sm:gap-10'>

        <h1 className='text-2xl sm:text-3xl'>Think inside the box!</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center'>

          <div className='w-full max-w-65 h-44 sm:h-48 bg-[#1FB85A] p-5 border-2 shadow-[3px_3px_0px_#000] rounded-xl rotate-2'>
            <h1 className='text-white text-2xl sm:text-3xl border-b'>Tech</h1>
          </div>

          <div className='w-full max-w-65 h-44 sm:h-48 bg-[#E63B2E] p-5 border-2 shadow-[3px_3px_0px_#000] rounded-xl -rotate-2'>
            <h1 className='text-white text-2xl sm:text-3xl border-b'>Home</h1>
          </div>

          <div className='w-full max-w-65 h-44 sm:h-48 bg-[#FFD400] p-5 border-2 shadow-[3px_3px_0px_#000] rounded-xl rotate-2'>
            <h1 className='text-2xl sm:text-3xl border-b'>Fashion</h1>
          </div>

          <div className='w-full max-w-65 h-44 sm:h-48 bg-[#2B6CFF] p-5 border-2 shadow-[3px_3px_0px_#000] rounded-xl -rotate-2'>
            <h1 className='text-2xl sm:text-3xl border-b'>Bags</h1>
          </div>

        </div>
      </div>

      {/* Gift Section */}
      <div className='w-full min-h-60 bg-[#2B6CFF] mt-12 sm:mt-16 lg:mt-20 mb-8 p-6 sm:p-10 lg:px-20 border-2 shadow-[3px_3px_0px_#000] rounded-xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>

        <div>
          <h1 className='text-white text-2xl sm:text-3xl'>
            Gift it in a box that smiles back.
          </h1>

          <p className='text-stone-300 mt-3 text-sm sm:text-base leading-relaxed'>
            Add free gift wrap and a handwritten note at checkout.
            We'll hide the price, you take the credit.
          </p>
        </div>

        <button className='w-full sm:w-fit border-2 h-fit px-10 sm:px-16 lg:px-20 py-4 rounded-xl shadow-[3px_3px_0px_#000] cursor-pointer bg-[#FFD400] hover:-rotate-2 transition'>
          SHOP GIFT
        </button>

      </div>

    </div>
  )
}

export default Home

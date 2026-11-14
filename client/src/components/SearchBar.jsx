import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";


const SearchBar = ({search , setSearch}) => {


  return (
    <div className='relative'>
        <IoIosSearch size={30} className='absolute top-3 left-5 z-1 '/>
        <input onChange={(e)=> setSearch(e.target.value)} value={search} type="text" placeholder=' Search the box here' className=' border-2 shadow-[3px_3px_0px_#000] bg-white rounded-xl w-120 py-4 px-14 outline-none hover:scale-x-105' />
    </div>
  )
}

export default SearchBar
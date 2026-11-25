
import React from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ search, setSearch }) => {

  return (
    <div className='relative w-full sm:w-auto'>

      <IoIosSearch
        size={26}
        className='absolute top-1/2 -translate-y-1/2 left-4 z-10'
      />

      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder='Search the box here'
        className='border-2 shadow-[3px_3px_0px_#000] bg-white rounded-xl w-full sm:w-80 md:w-96 lg:w-[30rem] py-3 sm:py-4 pl-12 pr-4 outline-none transition-transform duration-200 hover:scale-[1.02]'
      />

    </div>
  )
}

export default SearchBar

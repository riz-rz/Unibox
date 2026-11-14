import React from 'react'
import { BsCart3 } from "react-icons/bs";
import Profile from './Profile';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div className='h-20 bg-[rgb(255,248,220)] border-b-3 px-10 flex items-center justify-between gap-10'>
        <div className='w-50 h-full  flex justify-center items-center gap-5'>
            <img src="/assets/unibox-logo.svg" alt="logo-kuttan" className='w-10'/>
            <h1 className=' text-3xl'>Unibox</h1>
        </div>
        <nav>
            <ul className='flex gap-10 cursor-pointer'>
                <li><Link to="/ ">Home</Link> </li>
                <li><Link to="/products" >Products</Link> </li>
                <li><Link>About Us</Link> </li>
                <li><Link>Contacts</Link> </li>
            </ul>
        </nav>
        <div className='flex gap-5'>
           <Profile/>
            <button className='h-12 w-12 bg-[#FFD400] border-2 rounded-xl flex justify-center items-center shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 cursor-pointer '>
                <Link to="/cart"><BsCart3 size={25}/></Link>
            </button>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';



const Profile = () => {
  return (
    <details>
        <summary className='h-12 w-12 bg-white border-2 rounded-xl flex justify-center items-center shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 cursor-pointer '>
             <BsPerson size={28}/>
        </summary>  
        <div className="absolute right-0 top-14 w-32 bg-white border-2  border-black rounded-xl shadow-[3px_3px_0px_#000] z-50">
            <Link to="/signup" className="block p-3 hover:bg-yellow-300 hover:rounded-t-xl">
              Sign Up
            </Link>

            <Link to="/login" className="block p-3 hover:bg-yellow-300 hover:rounded-b-xl">
              Login
            </Link>
        </div>
    </details>
    
    )
}

export default Profile
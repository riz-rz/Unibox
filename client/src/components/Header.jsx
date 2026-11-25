
import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Profile from './Profile';
import { Link } from 'react-router-dom';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className='relative min-h-20 bg-[rgb(255,248,220)] border-b-2 px-4 sm:px-6 md:px-10 flex items-center justify-between gap-3 py-3'>

      {/* Logo */}
      <div className='flex items-center gap-2 sm:gap-5'>
        <img
          src="/assets/unibox-logo.svg"
          alt="logo-kuttan"
          className='w-8 sm:w-10'
        />
        <h1 className='text-2xl sm:text-3xl'>Unibox</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden md:block'>
        <ul className='flex gap-8 lg:gap-10 cursor-pointer'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link>About Us</Link></li>
          <li><Link>Contacts</Link></li>
        </ul>
      </nav>

      {/* Profile, Cart and Mobile Menu */}
      <div className='flex items-center gap-3 sm:gap-5'>

        <Profile />

        <button className='h-10 w-10 sm:h-12 sm:w-12 bg-[#FFD400] border-2 rounded-xl flex justify-center items-center shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 cursor-pointer'>
          <Link to="/cart" className='flex items-center justify-center'>
            <BsCart3 size={22} />
          </Link>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='md:hidden h-10 w-10 flex justify-center items-center rounded-lg hover:bg-[#f0e5bd] transition'
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <HiX size={28} />
          ) : (
            <HiMenuAlt3 size={28} />
          )}
        </button>

      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className='absolute top-full left-0 w-full bg-[rgb(255,248,220)] border-b-2 shadow-lg z-50 md:hidden'>
          <ul className='flex flex-col py-3 px-6 gap-1'>

            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className='block py-3 px-3 rounded-lg hover:bg-[#f0e5bd] transition'
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                onClick={closeMenu}
                className='block py-3 px-3 rounded-lg hover:bg-[#f0e5bd] transition'
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className='block py-3 px-3 rounded-lg hover:bg-[#f0e5bd] transition'
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contacts"
                onClick={closeMenu}
                className='block py-3 px-3 rounded-lg hover:bg-[#f0e5bd] transition'
              >
                Contacts
              </Link>
            </li>

          </ul>
        </nav>
      )}

    </div>
  )
}

export default Header

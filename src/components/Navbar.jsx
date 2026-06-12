import React from 'react'
import logo from '../assets/logo.png'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode' 

const Navbar = () => {
  return (
    <div className="shadow-md bg-cyan-50 dark:bg-gray-900 dark:text-white z-40" >
        {/* Upper Navbar */}
        <div className="bg-primary/40 flex items-center px-5">
            <div className="container justify-between items-center flex">
                <div>
                    <a href="#"
                    className="font-bold text-2xl  sm:text-2xl flex items-center gap-2">
                        <img src={logo} alt="Logo" 
                        className="w-10 rounded-full"/>
                        Ude's shop
                    </a>
                </div>
                {/* search bar */}
                <div className="flex justify-between items-center gap-4 ">
                  <div className="group relative hidden sm:block">
                    <input type="text" 
                        placeholder="Search..." 
                        className="w-50 sm:w-64 group-hover:w-75 transition-all duration-300
                        rounded-full border border-secondary
                        px-2 py-1 focus:outline-none focus:border focus:border-secondary bg-white text-primary placeholder:text-gray-400" />
                        <IoMdSearch className="text-gray-500 group-hover:text-primary  absolute top-1/2 -translate-1/2 right-3 " />
                  </div>
                </div>
                {/* order button */}
                <button
                  onClick={() => alert('Ordering not avaliable yet')}
                  className="bg-linear-to-r from-primary to-secondary transition-all duration-300 
                  text-cyan-50 py-1 px-4 rounded-full flex items-center gap-3 group ">
                  <span className="group-hover:block hidden transition-all duration-300">order</span>
                  <FaCartShopping className="text-xl text-cyan-50 drop-shadow-sm cursor-pointer "/>
                </button>
                {/* dark mode toggle */}
            </div>
            <DarkMode/> 
        </div>
        {/* Lower Navbar */}
      <div></div>
    </div>
  )
}

export default Navbar

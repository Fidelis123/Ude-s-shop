import React from 'react'
import logo from '../assets/logo.png'
import { IoMdSearch } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white z-40" >
        {/* Upper Navbar */}
        <div className="bg-primary/40 ">
            <div className="container justify-between items-center flex">
                <div>
                    <a href="#"
                    className="font-bold text-2xl  sm:text-3xl flex items-center gap-2">
                        <img src={logo} alt="Logo" 
                        className="w-10 rounded-full"/>
                        Ude's shop
                    </a>
                </div>
                {/* search bar and order button */}
                <div>
                  <div className="group relative">
                    <input type="text" 
                        placeholder="Search..." 
                        className="w-50 sm:w-64 group-hover:w-75 transition-all duration-300
                        rounded-full border border-secondary
                        px-2 py-1 focus:outline-none focus:border focus:border-secondary bg-white text-primary placeholder:text-gray-400" />
                        <IoMdSearch className="text-primary text-xl" />
                  </div>
                </div>
            </div> 
        </div>
        {/* Lower Navbar */}
      <div></div>
    </div>
  )
}

export default Navbar

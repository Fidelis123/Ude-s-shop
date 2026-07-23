import React from 'react'
import logo from '../assets/logo.png'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import { FaCaretDown } from 'react-icons/fa6'
import DarkMode from './DarkMode'


const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#'
  },
  {
    id: 2,
    name: 'Top Rated',
    link: '/#Services'
  },
  {
    id: 3,
    name: 'kids wear',
    link: '/#'
  },
  {
    id:4,
    name: 'Mens Wear',
    link: '/#'
  },
  {
    id:5,
    name: 'Womens Wear',
    link: '/#'
  },
  {
    id:6,
    name: 'Electronics',
    link: '/#'
  }
]

const DropdownLinks = [
  {
    id:1,
    name:'Trending',
    link: '/#'
  },
  {
    id:2,
    name:'Best selling',
    link: '/#'
  },
  {
    id:3,
    name:'Top Rated',
    link: '/#'
  },
  
]


const Navbar = () => {
  return (
    <div className="shadow-md bg-cyan-50 dark:bg-gray-900 dark:text-white z-40" >
        {/* Upper Navbar */}
        <div className="bg-primary/40 flex items-center px-5 ">
            <div className="container justify-between items-center flex">
                <div>
                    <a href="#"
                    className="font-bold text-2xl  sm:text-2xl flex items-center gap-2">
                        <img src={logo} alt="Logo" 
                        className="w-10 rounded-full  "/>
                        Ude's shop
                    </a>
                </div>
                {/* search bar */}
                <div className="flex justify-between items-center gap-4 ">
                  <div className="group relative hidden sm:block">
                    <input type="text" 
                            placeholder="Search..." 
                            className="w-50 sm:w-64 group-hover:w-75 transition-all duration-300
                            rounded-full border border-gray
                            px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray 
                           bg-white text-primary placeholder:text-gray-400" />
                        <IoMdSearch className="text-gray-500 group-hover:text-primary  absolute top-1/2 -translate-1/2 right-3 " />
                  </div>
                </div>
                {/* order button */}
                <div className="flex justify-between items-center gap-4 sm:gap-6 ">
                  <button
                    onClick={() => alert('Ordering not avaliable yet')}
                    className="bg-linear-to-r from-primary to-secondary transition-all absolute duration-300 
                    text-cyan-50 py-1 px-4 rounded-full flex items-center right-12 group cursor-pointer">
                    <span className="group-hover:block hidden transition-all duration-300">order</span>
                    <FaCartShopping className="text-xl text-cyan-50 drop-shadow-sm cursor-pointer "/>
                  </button>
                  {/* dark mode toggle */}
                  <DarkMode/> 
                </div>
          </div>
        </div>
        {/* Lower Navbar */}
      <div className="flex justify-center bg-accent/20 dark:bg-primary-dark">
        <ul className="sm:flex hidden justify-center items-center gap-4">
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="inline-block px-3 
                 hover:text-extra duration-200 sm:text-sm text-xs font-medium
                  transition-all">
                  {data.name}</a>
              </li>
            ))}

            {/* simple dropdown and link  */}
             <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center
               text-sm font-medium 
               transition-all duration-200">
                Trending
                <span>
                  <FaCaretDown className=" transition-all duration-200
                    group-hover:rotate-180 "/>
                </span>
              </a>
              <div className="absolute z-1000 hidden group-hover:block w-37.5
              right-0 rounded-md p-2 bg-accent/20 shadow-md">
                < ul>
                  {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} 
                    className="inline-block w-full rounded-md hover:bg-gray-50
                     hover:text-primary-dark transition-all duration-200 px-3 py-1 text-sm font-medium">
                      {data.name}
                    </a>
                  </li>
                  ))
                  }
                </ul>
              </div>
             </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

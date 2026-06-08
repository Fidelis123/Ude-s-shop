import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div >
        {/* Upper Navbar */}
        <div>
            <div>
                <div>
                    <a href="#">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                {/* search bar and order button */}
                <div>
                  <div className="group">
                    <input type="text" 
                        placeholder="Search..." 
                        className="w-50 sm:w-50 group-hover:w-75 transition-all duration-300
                        rounded-full border border-color-secondary:var(--color-secondary)
                        px-2 py-1 focus:outline-none focus:border focus:border-secondary" />
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

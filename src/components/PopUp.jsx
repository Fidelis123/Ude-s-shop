import React from 'react'
import { motion } from 'motion/react'
import { IoCloseOutline } from 'react-icons/io5'
import { div } from 'motion/react-client'

const PopUp = ({orderPopup, setOrderPopup}) => {
  return (
    <>
        {orderPopup &&( <div className="Popup"> 
            <div className="h-screen w-screen fixed top-0 
            left-0 bg-black/50 z-50 backdrop-blur-sm">
                <div className="fixed top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 p-4 shadow-md
                 bg-white dark:bg-dark-four dark:text-white 
                 rounded-lg z-50 duration-200 w-75">
                    {/* header  */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h1>Order Now</h1>
                        </div>
                        <div>
                            <IoCloseOutline 
                                className="text-2xl cursor-pointer hover:text-primary duration-300"
                                onClick={() => setOrderPopup(false)}
                            />
                        </div>
                    </div>
                    {/* form section  */}
                    <div className="mt-4">
                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="Name" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary px-2 py-1"/>
                            <input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary px-2 py-1 "/>
                            <input type="text" placeholder="Address" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary px-2 py-1 "/> 
                            <div className="flex justify-center items-center gap-4">
                                <button type="submit" className="btn-primary transition-colors duration-300"> Order Now</button>
                            </div> 
                            
                        </form>  
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
  )
}

export default PopUp

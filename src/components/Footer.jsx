import React from 'react'
import { motion, AnimatePresence } from "motion/react";
import FooterLogo from '../assets/website/logo.png'
import Banner from '../assets/website/footerbanner.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import { FaHeadset } from 'react-icons/fa6';



const BannerImg ={
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
}

const FooterLinks = [
    {
        title: "Home",
        links: "/#home"
    },

    {
        title: "About",
        links: "/#about"
    },

    {
        title: "Contact",
        links: "/#contact"
    },

    {
        title: "Blog",
        links: "/#blog"
    },
]


const footer = () => {
    const [isopen, setIsOpen] = React.useState(false);

  return (
    <div style={BannerImg} className="text-white h-60">
        <div className="container py-10 ">
            <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once:true}}
            transition={{ duration: 0.6, ease: "easeInOut" }} 
            className="grid grid-cols-2 sm:grid-cols-3  pb-44 pt-5 ">

            {/* Company details  */}
            <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold 
                    sm:text-left text-justify  mb-3 flex 
                    items-center gap-3 whitespace-nowrap"> 
                <img src={FooterLogo} alt="" className="max-w-15  rounded-4xl " /> 
                Ude's shop</h1>
                <p className="text-sm sm:text-base text-gray-300 whitespace-nowrap">
                    -- SHOP MORE, SAVE MORE --
                </p>
            </div> 
            {/* Footer links details  */}
            <div className="grid grid-cols-2  sm:grid-cols-3 
                col-span-2 md:pl-10 whitespace-nowrap">
                <div>
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl text-xl font-bold 
                        sm:text-left text-justify mb-3 ">Quick Links</h1>
                        <ul className="flex flex-col gap-4 text-sm  sm:text-base">
                            {
                                FooterLinks.map((link) => (
                                    <li className="cursor-pointer 
                                     hover:text-primary hover:translate-x-l duration-300"
                                     key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className=" align-center justify-center" >
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl text-xl font-bold 
                        sm:text-left text-justify mb-3 ">Useful  Links</h1>
                        <ul className="flex flex-col gap-4 text-sm  sm:text-base">
                            {
                                FooterLinks.map((link) => (
                                    <li className="cursor-pointer 
                                     hover:text-primary hover:translate-x-l duration-300"
                                     key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* socials links */}

                <div className="col-span-2 sm:col-span-1" >
                    <div className="flex item-center gap-3 mt-6">
                        <a href="#" className="ml-4">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="#" className="ml-4">
                            <FaTwitter className="text-3xl" />
                        </a>
                        <a href="#" className="ml-4">
                            <FaFacebookF className="text-3xl" />
                        </a>
                        <a href="#" className="ml-4">
                            <FaLinkedinIn className="text-3xl" />
                        </a>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <FaLocationArrow className="text-3xl" />
                            <p>Nigeria, Somewhere in southeast</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaMobileAlt className="text-3xl" />
                            <p>+234 812 345 6789</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        <div className="text-center py-6 text-sm text-gray-500">
            Designed by <span className="font-bold text-orange-300">Udenwa.dev</span>
        </div>
        <div className="text-center py-6 text-sm text-gray-500">
            Copywrite &copy; 2026 Ude's shop. All rights reserved.
        </div>
      </div>

      {/* Customer service widget */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
            {isopen && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="h-12 bg-primary text-white px-4 rounded-lg shadow-lg flex items-center"
                >
                    <p className="whitespace-nowrap">customer service</p>
                </motion.div>
            )}
        </AnimatePresence>
            <button 
            onclick={() => setIsOpen(!isopen)}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <FaHeadset size={20}/>
            </button>
          </div>
    </div>
  )
}

export default footer

import React from 'react'
import { motion } from "motion/react";
import FooterLogo from '../assets/website/logo.png'
import Banner from '../assets/website/footerbanner.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

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
  return (
    <div style={BannerImg} className="text-white">
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
                    items-center gap-3"> 
                <img src={FooterLogo} alt="" className="max-w-15  rounded-4xl " /> 
                Ude's shop</h1>
                <p>-- SHOP MORE, SAVE MORE --</p>
            </div> 
            {/* Footer links details  */}
            <div className="grid grid-cols-3  sm:grid-cols-3 
                col-span-2 md:pl-10">
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
            Copywrite &copy; 2023 Ude's shop. All rights reserved.
        </div>
      </div>
      <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-lg shadow-lg z-50">
                <p>This is a simple pop-up message.</p>
            </motion.div>
          </div>
    </div>
  )
}

export default footer

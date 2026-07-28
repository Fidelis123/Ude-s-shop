import React from 'react'
import { motion } from 'framer-motion'
import Banner from '../assets/website/Banner.png'

const bgStyle = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const Subscribe = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      }} 
      className="mb-20 bg-gray-100 dark:bg-primary-dark text-white/60 " 
      style={bgStyle}
    >
      <div className="container backdrop-blur-sm py-10"> 
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center! sm:text-left 
            sm:text-4xl font-semibold">
            Get Notified About New products
          </h1>
          <input
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            type="text"
            placeholder="Enter your email" 
            className="w-full p-3 bg-white rounded-2xl border border-accent "/>
        </div>
      </div>
    </motion.div>
  )
}

export default Subscribe
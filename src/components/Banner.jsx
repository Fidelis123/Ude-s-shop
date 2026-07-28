import React from 'react'
import BannerImg from '../assets/website/Banner.png'
import { motion } from "motion/react";
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className="min-h-135.5 flex justify-center
    items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 
        gap-6 items-center">
          {/* image section */}
          <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
              }}
          >
            <img src={BannerImg} alt="" 
            className="max-w-150  w-full mx-auto 
            drop-shadow-[-10px_10px_12px_rgba(0,0,0.1)]
             object-cover" />
          </motion.div>
          {/* text details section */}
          <div claaName="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold">Winter Sale upto 50% off</h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5"> Don't miss out on our biggest sale of the 
              season! Shop the latest trends in fashion, 
              footwear, and accessories — all at unbeatable 
              prices. Limited time offer, 
              so grab your favorites before they're gone.
            </p>

            <div className="flex flex-col gap-4">
                <motion.div className="flex items-center gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm 
                    p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                  <p>Top Quality</p>
                </motion.div>

                <motion.div className="flex items-center gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm 
                    p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p>Fast Delivery</p>
                </motion.div>

                <motion.div className="flex items-center gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                  <IoFastFood className="text-4xl h-12 w-12 shadow-sm 
                    p-4 rounded-full bg-green-100 dark:bg-green-400" />
                  <p>Get offers</p>
                </motion.div>

                <motion.div className="flex items-center gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                >
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm 
                    p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                  <p>Easy payment method</p>
                </motion.div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Banner

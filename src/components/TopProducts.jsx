import React from 'react'
import { motion } from "motion/react";
import img1 from '../assets/products/white T.webp'
import img2 from '../assets/products/Manfinity Streetrush Men.jpeg'
import img3 from '../assets/products/greenT.webp'
import { FaStar } from 'react-icons/fa'


const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Casual wear",
    description: "Effortless, everyday style designed for your relaxed days.",
  },

  {
    id: 2,
    img: img2,
    title: "Casual wear",
    description: "Effortless, everyday style designed for your relaxed days.",
  },

  {
    id: 3,
    img: img3,
    title: "Casual wear",
    description: "Effortless, everyday style designed for your relaxed days.",
  },
]



const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}

        <div className="text-left mb-25 ">
          <p className="text-sm text-primary">Top Rated products for you</p>
          <h2 className="text-3xl font-bold"> Best Products</h2>
          <p className="text-xs  text-gray-500">
            orem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
          </p>
        </div>

        {/* body section */}

        <div className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {
            ProductsData.map ((data) => (
              <motion.div className="rounded-2xl bg-white dark:bg-primary-dark hover:bg-black 
                dark:hover:bg-crown hover:text-white relative shadow-xl duration-300 group max-w-75"
                initial={{ opacity: 0, scale: 0.9, y: 30,}}
                  whileInView={{ opacity: 1, scale: 1, y:0,}}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    delay: data.id * 0.15,
                    damping: 18,
                  }}
                >
                {/* image section */}
                <div className="h-25">
                  <img src={data.img} alt="" className= "h-50 w-45 rounded-2xl max-w-45 block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md "/>
                </div>
                <div className="p-4 text-center mt-5 ">
                  {/* start rating */}
                  <div className="w-full flex items-cneter
                    justify-center gap-1">
                    <FaStar className="text-yellow-500"/>
                    <FaStar className="text-yellow-500"/>
                    <FaStar className="text-yellow-500"/>
                    <FaStar className="text-yellow-500"/>
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white 
                  duration-300 text-sm line-clamp-2">{data.description}</p>
                  <button  className="btn-primary btn-primary:hover mt-2" >Order Now</button>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopProducts

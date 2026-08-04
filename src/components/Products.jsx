import React from "react";
import img1 from "../assets/products/ankara.jpeg";
import img2 from "../assets/products/flower dress.jpeg";
import img3 from "../assets/products/lofers.jpeg";
import img4 from "../assets/products/brown suilts.jpeg";
import img5 from "../assets/products/burgundy.jpeg";
import { FaStar } from "react-icons/fa6" ;
import { motion } from "motion/react";



const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Ankara",
    rating: 5.0,
    color: "  Burgundy",
    aosDelay: "0",
  },

  {
    id: 2,
    img: img2,
    title: "Women dress",
    rating: 4.5,
    color: "White",
    aosDelay: "200",
  },

  {
    id: 3,
    img: img3,
    title: "Shoes",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },

  {
    id: 4,
    img: img4,
    title: "Mens fit",
    rating: 5.0,
    color: "Burgundy",
    aosDelay: "600",
  },

  {
    id: 5,
    img: img5,
    title: "Bags",
    rating: 4.5,
    color: "Burgundy",
    aosDelay: "800",
  },

  

]
const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section  */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-sm text-primary">Top selling products for you</p>
          <h2 className="text-3xl font-bold">Products</h2>
          <p className="text-xs  text-gray-500">
            orem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
          </p>
        </div>
        {/* Body section  */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3
          md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* cards section */}
            {
              ProductsData.map((data)=> (
                <motion.div keys= {data.id}
                  className="space-y-3 bg-primary dark:bg-primary-dark p-3 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                  duration: 0.8,
                  delay: data.id * 0.1,
                  ease: "easeOut",
                  }}
                >
                  <img src={data.img} alt=""
                  className="h-55 w-40.5 object-cover rounded-md"/>

                  <div className="space-y-1">
                    <h3 className="font-semibold text-white">{data.title}</h3>
                    <p className="text-sm text-gray-300">{data.color}</p>
                    <div className="flex items-center gap-1 ">
                      <FaStar className="text-yellow-400"/>
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
               {/* view more */}
               <div className="flex justify-center">
                  <button className="btn-primary btn-primary:hover mt-10 py-1 "
                  >View More </button>
               </div>
        </div>
      </div>
    </div>
  )
}

export default Products

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react";
import { FaStar, FaHeart, FaArrowRight } from 'react-icons/fa'
import { IoHeartOutline } from 'react-icons/io5'

// Existing product images from the project
import img1 from '../assets/products/greenone.jpeg'
import img2 from '../assets/products/Manfinity Streetrush Men.jpeg'
import img3 from '../assets/products/white.jpeg'
import img4 from '../assets/products/brown suilts.jpeg'
import img5 from '../assets/products/minibag.jpg'
import img6 from '../assets/products/New Balance 993.jpeg'

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Linen Blend Blazer",
    price: "$89.99",
    rating: 5,
    reviews: 124,
  },
  {
    id: 2,
    img: img2,
    title: "Ribbed Knit Top",
    price: "$29.99",
    rating: 5,
    reviews: 98,
  },
  {
    id: 3,
    img: img3,
    title: "Wide Leg Trousers",
    price: "$59.99",
    rating: 5,
    reviews: 76,
  },
  {
    id: 4,
    img: img4,
    title: "Leather Shoulder Bag",
    price: "$79.99",
    rating: 5,
    reviews: 112,
  },
  {
    id: 5,
    img: img5,
    title: "Minimal Strappy Heels",
    price: "$49.99",
    rating: 5,
    reviews: 64,
  },
  {
    id: 6,
    img: img6,
    title: "Oversized Sunglasses",
    price: "$19.99",
    rating: 5,
    reviews: 53,
  },
]

const TopProducts = ({ handleOrderPopup }) => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-10 bg-white dark:bg-dark-four transition-colors duration-200">
      <div className="container">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="text-left">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#BF913B] dark:text-[#E5A024]">
              Top Rated Products for You
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
              Top Products
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xl">
              Explore our most popular and highly rated essentials curated for your everyday style.
            </p>
          </div>

          {/* View More button at top right */}
          <Link
            to="/top-rated"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-stone-700 bg-white dark:bg-dark-three hover:bg-stone-50 dark:hover:bg-dark-two hover:border-[#BF913B] dark:hover:border-[#E5A024] text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-[#BF913B] dark:hover:text-[#E5A024] transition-all duration-300 group shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>View More</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* 6-Column Responsive Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {ProductsData.map((data, index) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut"
              }}
              onClick={() => handleOrderPopup && handleOrderPopup(data)}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Card Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#F6F4F0] dark:bg-[#201813] border border-black/5 dark:border-white/5 transition-all duration-300 group-hover:shadow-md">
                {/* Wishlist Heart Button */}
                <button
                  type="button"
                  onClick={(e) => toggleWishlist(data.id, e)}
                  aria-label="Add to wishlist"
                  className="absolute top-2.5 right-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 dark:bg-black/40 text-gray-700 dark:text-gray-200 backdrop-blur-xs transition-all duration-200 hover:scale-110 hover:text-red-500 active:scale-90 shadow-xs"
                >
                  {wishlist[data.id] ? (
                    <FaHeart className="h-4 w-4 text-red-500" />
                  ) : (
                    <IoHeartOutline className="h-4 w-4 hover:text-red-500 transition-colors" />
                  )}
                </button>

                {/* Product Image */}
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Quick View Button on Hover */}
                <div className="absolute inset-x-0 bottom-2 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <Link
                    to={`/QuickView/${data.id}`}
                    state={{ product: data }}
                    onClick={(e) => e.stopPropagation()}
                    className="block w-full py-2 text-center text-xs font-semibold rounded-lg bg-white/95 dark:bg-black/85 text-gray-900 dark:text-white hover:bg-[#BF913B] hover:text-white dark:hover:bg-[#E5A024] dark:hover:text-black backdrop-blur-xs shadow-md transition-all duration-200 cursor-pointer"
                  >
                    Quick View
                  </Link>
                </div>
              </div>

              {/* Product Info Section (Below Image) */}
              <div className="pt-3 text-left">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 truncate group-hover:text-[#BF913B] dark:group-hover:text-[#E5A024] transition-colors">
                  {data.title}
                </h3>
                <p className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mt-0.5">
                  {data.price}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="flex text-[#B8701B] dark:text-[#E5A024] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                    ({data.reviews})
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopProducts

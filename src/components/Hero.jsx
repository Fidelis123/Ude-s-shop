import React from "react";
import image1 from "../assets/hero/bag.png";
import image2 from "../assets/hero/Suits.png";
import image3 from "../assets/hero/Shoe.png";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaCartShopping } from "react-icons/fa6";

const ImageList = [
  {
    id: 1,
    img: image1,
    alt: "Women's Bag Collection - Carry Your Confidence",

    // description: "Discover our latest collection of women's bags. ",
    // title: "Women's Bag Collection",
  },
  {
    id: 2,
    img: image2,
    alt: "Men's Luxury Wear - Dress Sharp Live Confident",

    // description: "Discover our latest collection of men's wear. ",
    // title: "Men's Luxury Wear",
  },
  {
    id: 3,
    img: image3,
    alt: "Performance Footwear - Move Further Look Better",

    // description: "Discover our latest collection of men's footwear. ",
    // title: "Performance Footwear",
  },
];

const Hero = ({ handleOrderPopup }) => {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="hero-swiper w-full overflow-hidden"
      >
        {ImageList.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative w-full aspect-[2/1] overflow-hidden select-none bg-stone-100 dark:bg-dark-three"
              style={{ aspectRatio: "2 / 1" }}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover object-center"
              />

              {/* Hero Button Only */}
              <div className="absolute left-[6%] bottom-[8%] sm:bottom-[10%] md:bottom-[11%] z-20">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                  }}
                >
                  <button
                    onClick={handleOrderPopup}
                    className="btn-primary text-xs sm:text-sm md:text-base font-semibold px-3.5 py-1.5 sm:px-6 sm:py-2.5 md:px-8 md:py-3 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer group"
                  >
                    <span>Order Now</span>
                    <FaCartShopping className="text-sm sm:text-base md:text-lg group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

import React from "react";
import image1 from "../assets/hero/woman.jpeg";
import image2 from "../assets/hero/suits.jpeg";
import image3 from "../assets/hero/shoe.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const ImageList = [
  {
    id: 1,
    img: image1,
    tittle: "Upto 20% off on all Women's bag",
    description: "Pretty ladys shop from here.",
  },
  {
    id: 2,
    img: image2,
    tittle: "Upto 50% off on all Men's wear",
    description: "Lorem his life will change forever.",
  },
  {
    id: 3,
    img: image3,
    tittle: "Upto 10% off on all Unisex shoes",
    description: "Best shoes are sold here.",
  },
];

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden min-h-137.5 sm:min-h-162.5
      bg-extra/50 flex items-center justify-center dark:bg-extra
      dark:text-white duration-200"
    >
      {/* background pattern */}
      <div
        className="h-160 w-160 bg-primary/40
        absolute -top-1/2 right-0 rounded-3xl rotate-45 z-0"
      ></div>

      {/* hero section */}
      <section className="container pb-8 sm:pb-0">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {ImageList.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className="flex flex-col justify-center gap-4 pt-12 sm:pt-0
                  text-center sm:text-left order-2 sm:order-1 relative z-10"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                    {item.tittle}
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg mb-6">
                    {item.description}
                  </p>

                  <div>
                    <button
                      onClick={() => alert("Ordering not available yet")}
                      className="btn-primary ml-1"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* image section */}
                <section className="order-1 sm:order-2 flex items-center justify-center">
                  <div className="relative z-10">
                    <img
                      src={item.img}
                      alt={item.tittle}
                      className="w-80 h-80 sm:h-110 sm:w-110  z-10
                      sm:scale-100 object-cover object-center rounded-full border-4 border-primary"
                    />
                  </div>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Hero;
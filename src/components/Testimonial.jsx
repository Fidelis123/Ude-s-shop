import React from 'react'
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: "https://picsum.photos/id/200/1002",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: "https://picsum.photos/id/201/1002",
  },
  {
    id: 3,
    name: "Alice Johnson",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: "https://picsum.photos/id/202/1002",
  },
  {
    id: 4,
    name: "Bob Williams",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: "https://picsum.photos/id/203/1002",
  },
  {
    id: 5,
    name: "Victor Smith",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: "https://picsum.photos/id/204/1002",
  },
]

const Testimonial = () => {
  return (
    <div className="py-10 mb-10 overflow-hidden">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-sm text-primary">Customers Testimonials</p>
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <p className="text-xs text-gray-500">
            orem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
          </p>
        </div>
        {/* Testimonial card */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {TestimonialData.map((data) => (
              <SwiperSlide key={data.id} className="py-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-4 py-8 px-6 bg-primary/10 relative rounded-xl shadow-md dark:bg-primary-dark overflow-hidden h-full"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-col items-start gap-2 z-10">
                    <p className="text-gray-500 dark:text-gray-300 text-xs leading-relaxed">{data.text}</p>
                    <h3 className="text-xl font-bold text-black/80 dark:text-white">{data.name}</h3>
                  </div>

                  <span className="text-black/10 dark:text-white/10 text-9xl font-serif absolute -top-4 right-2 pointer-events-none select-none leading-none">
                    &rdquo;
                  </span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

import React from "react";
import img1 from "../assets/products/ankara.jpeg";
import img2 from "../assets/products/flower dress.jpeg";
import img3 from "../assets/products/lofers.jpeg";
import img4 from "../assets/products/brown suilts.jpeg";
import img5 from "../assets/products/burgundy.jpeg";
import img6 from "../assets/products/greenT.jpeg";
import img7 from "../assets/products/greenone.jpeg";
import img8 from "../assets/products/New Balance 993.jpeg";    

const ProductsData = [
  { id: 1, img: img1, title: "Ankara" },
  { id: 2, img: img2, title: "Women fit" },
  { id: 3, img: img3, title: "Shoes" },
  { id: 4, img: img4, title: "Mens fit" },
  { id: 5, img: img5, title: "Bags" },
  { id: 6, img: img6, title: "T-shirts" },
  { id: 7, img: img7, title: "Green T-shirt" },
  { id: 8, img: img8, title: "New Balance 993" }
]

// Duplicate for infinite loop effect
const loopData = [...ProductsData, ...ProductsData,...ProductsData,...ProductsData,...ProductsData]

const Products = () => {
  return (
    <div className="py-10 bg-white dark:bg-dark-three overflow-hidden">
      <div className="flex animate-scroll gap-8 w-max">
        {loopData.map((data, index) => (
          <div key={index} className="flex flex-col items-center gap-2 w-24">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden
              bg-gray-100 dark:bg-dark-two shadow-md hover:shadow-lg
              hover:scale-105 transition-all duration-300 cursor-pointer">
              <img
                src={data.img}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs sm:text-sm text-center font-medium
              text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
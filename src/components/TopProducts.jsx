import React from 'react'
import img1 from '../assets/products/white gown.jpeg'
import img2 from '../assets/products/white gown.jpeg'
import img3 from '../assets/products/white gown.jpeg'


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

        <div className="text-left mb-10 ">
          <p className="text-sm text-primary">Top Rated products for you</p>
          <h2 className="text-3xl font-bold"> Best Products</h2>
          <p className="text-xs  text-gray-500">
            orem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quod.
          </p>
        </div>

        {/* body section */}

        <div>
          {
            ProductsData.map ((data) => {
              <div>

              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TopProducts

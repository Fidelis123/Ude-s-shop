import React, { useState } from 'react'
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom'
import { FaStar, FaHeart, FaTruck, FaShieldAlt, FaUndo, FaArrowLeft, FaCheck } from 'react-icons/fa'
import { IoHeartOutline } from 'react-icons/io5'
import { motion } from 'motion/react'

// Existing product images fallback
import img1 from '../assets/products/greenone.jpeg'
import img2 from '../assets/products/streetrush.jpeg'
import img3 from '../assets/products/white.jpeg'
import img4 from '../assets/products/brown suilts.jpeg'
import img5 from '../assets/products/minibag.jpg'
import img6 from '../assets/products/New Balance 993.jpeg'

const FallbackProducts = [
  {
    id: 1,
    img: img1,
    title: "Linen Blend Blazer",
    price: "$89.99",
    rating: 5,
    reviews: 124,
    description: "Expertly tailored for a structured yet relaxed silhouette. Crafted from an airy linen blend that delivers effortless elegance and breathable all-day comfort.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Cream", "Earthy Sand"],
  },
  {
    id: 2,
    img: img2,
    title: "Ribbed Knit Top",
    price: "$29.99",
    rating: 5,
    reviews: 98,
    description: "A contemporary wardrobe staple with a rich texture and tailored drape. Perfect for layering under jackets or wearing as a statement standalone piece.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Burgundy Plaid", "Charcoal", "Mocha"],
  },
  {
    id: 3,
    img: img3,
    title: "Wide Leg Trousers",
    price: "$59.99",
    rating: 5,
    reviews: 76,
    description: "Designed with a high rise and graceful fluid drape. These trousers bring timeless poise and versatility to both formal and casual settings.",
    sizes: ["26", "28", "30", "32", "34"],
    colors: ["Ivory White", "Oatmeal", "Stone"],
  },
  {
    id: 4,
    img: img4,
    title: "Leather Shoulder Bag",
    price: "$79.99",
    rating: 5,
    reviews: 112,
    description: "Premium safari tailoring meets modern function. Detailed with reinforced flap pockets, horn-effect buttons, and an adaptable waist tie.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Cognac Tan", "Chocolate Brown", "Olive"],
  },
  {
    id: 5,
    img: img5,
    title: "Minimal Strappy Heels",
    price: "$49.99",
    rating: 5,
    reviews: 64,
    description: "Sculpted structured silhouette accented with a delicate silk-feel scarf handle. Sized to hold your daily essentials with sophisticated finesse.",
    sizes: ["One Size"],
    colors: ["Powder Beige", "Warm Caramel", "Noir"],
  },
  {
    id: 6,
    img: img6,
    title: "Oversized Sunglasses",
    price: "$19.99",
    rating: 5,
    reviews: 53,
    description: "Heritage craftsmanship built with premium suede and mesh panels. Delivers superior stability and cushioning with iconic retro styling.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    colors: ["Classic Grey", "Off-White", "Charcoal"],
  },
]

const QuickView = ({ handleOrderPopup }) => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  // Match passed product from state or look up by ID
  const passedProduct = location.state?.product
  const product =
    passedProduct ||
    FallbackProducts.find((p) => String(p.id) === String(id)) ||
    FallbackProducts[0]

  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0] : "M"
  )
  const [selectedColor, setSelectedColor] = useState(
    product.colors ? product.colors[0] : "Default"
  )
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)
  const [addedNotice, setAddedNotice] = useState(false)

  const handleAddToCart = () => {
    setAddedNotice(true)
    setTimeout(() => setAddedNotice(false), 2500)
  }

  const handleOrder = () => {
    if (handleOrderPopup) {
      handleOrderPopup(product)
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-dark-four py-8 sm:py-12 transition-colors duration-200">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-[#BF913B] dark:hover:text-[#E5A024] transition-colors cursor-pointer"
          >
            <FaArrowLeft className="text-xs" />
            <span>Back to Products</span>
          </button>

          <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#BF913B]/10 text-[#BF913B] dark:bg-[#E5A024]/10 dark:text-[#E5A024]">
            Quick View Preview
          </span>
        </div>

        {/* Product Details Card */}
        <div className="bg-white dark:bg-dark-three rounded-3xl shadow-xl border border-black/5 dark:border-white/5 overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Product Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl bg-[#F6F4F0] dark:bg-[#201813] border border-black/5 dark:border-white/5 overflow-hidden flex items-center justify-center shadow-inner"
            >
              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsLiked(!isLiked)}
                aria-label="Save to wishlist"
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-black/50 text-gray-700 dark:text-gray-200 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:text-red-500 active:scale-95 shadow-sm"
              >
                {isLiked ? (
                  <FaHeart className="h-5 w-5 text-red-500" />
                ) : (
                  <IoHeartOutline className="h-5 w-5 hover:text-red-500 transition-colors" />
                )}
              </button>

              {/* Main Image */}
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* Top Rated Badge */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold tracking-wide">
                Top Rated
              </div>
            </motion.div>

            {/* Right: Product Information & Controls */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col text-left"
            >
              {/* Category & Status */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#BF913B] dark:text-[#E5A024]">
                  Featured Collection
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  ● In Stock
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {product.title}
              </h1>

              {/* Price & Star Rating */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pb-4 border-b border-gray-100 dark:border-stone-800">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {product.price}
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-[#B8701B] dark:text-[#E5A024] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    ({product.reviews || 120} customer reviews)
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description ||
                  "A timeless essential tailored with premium craftsmanship. Designed to seamlessly complement your wardrobe for any occasion with unmatched style and comfort."}
              </p>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                    Color: <span className="text-[#BF913B] dark:text-[#E5A024]">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                          selectedColor === color
                            ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-sm"
                            : "bg-stone-100 dark:bg-dark-two text-gray-700 dark:text-gray-300 hover:bg-stone-200 dark:hover:bg-dark-one"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                      Size: <span className="text-[#BF913B] dark:text-[#E5A024]">{selectedSize}</span>
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-10 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                          selectedSize === size
                            ? "border-2 border-[#BF913B] bg-[#BF913B]/10 text-[#BF913B] dark:border-[#E5A024] dark:bg-[#E5A024]/10 dark:text-[#E5A024]"
                            : "border border-gray-200 dark:border-stone-700 bg-white dark:bg-dark-two text-gray-700 dark:text-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector & Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center justify-between sm:justify-start border border-gray-200 dark:border-stone-700 rounded-full px-3 py-1.5 bg-stone-50 dark:bg-dark-two w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-6 rounded-full border-2 border-gray-900 dark:border-white font-bold text-sm text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 cursor-pointer shadow-xs"
                >
                  {addedNotice ? "✓ Added to Cart" : "Add to Cart"}
                </button>

                {/* Order Now Button */}
                <button
                  type="button"
                  onClick={handleOrder}
                  className="btn-primary flex-1 py-3 px-6 text-sm font-bold shadow-md cursor-pointer"
                >
                  Order Now
                </button>
              </div>

              {/* Added to cart toast notification */}
              {addedNotice && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2"
                >
                  <FaCheck className="text-emerald-600" />
                  <span>Added {quantity} × {product.title} ({selectedSize}) to your bag!</span>
                </motion.div>
              )}

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-gray-100 dark:border-stone-800 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FaTruck className="text-[#BF913B] dark:text-[#E5A024] text-sm shrink-0" />
                  <span>Free shipping over $50</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-[#BF913B] dark:text-[#E5A024] text-sm shrink-0" />
                  <span>Authentic & Quality Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUndo className="text-[#BF913B] dark:text-[#E5A024] text-sm shrink-0" />
                  <span>30-Day Hassle-Free Returns</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickView
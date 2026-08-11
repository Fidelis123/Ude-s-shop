import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import TopProducts from '../components/TopProducts'
import Banner from '../components/Banner'
import Subscribe from '../components/Subscribe'
import Testimonial from '../components/Testimonial'

const Home = ({ handleOrderPopup }) => {
  return (
    <>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Testimonial />
    </>
  )
}

export default Home
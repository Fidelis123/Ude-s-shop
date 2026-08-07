import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import TopProducts from './components/TopProducts'
import Banner from './components/Banner'
import Subscribe from './components/Subscribe'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import PopUp from './components/PopUp'



const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-dark-four transition-all 
    duration-200 dark:text-white ">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup}  />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup}  />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial />
      <Footer />
      <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}


export default App
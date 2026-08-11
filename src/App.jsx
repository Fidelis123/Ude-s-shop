import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopUp from './components/PopUp'
import Home from './pages/Home'
import MensWear from './pages/MensWear'
import WomensWear from './pages/WomensWear'
import TopRated from './pages/TopRated'




const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-dark-four transition-all 
    duration-200 dark:text-white ">
      <Navbar handleOrderPopup={handleOrderPopup} />
      
      <Routes>
        <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
        <Route path="/mens-wear" element={<MensWear />} />
        <Route path="/womens-wear" element={<WomensWear />} />
        <Route path="/top-rated" element={<TopRated />} />
      </Routes>
      <Footer />
      <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}


export default App
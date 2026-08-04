import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import TopProducts from './components/TopProducts'
import Banner from './components/Banner'
import Subscribe from './components/Subscribe'
import Testimonial from './components/Testimonial'

const App = () => {



  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial />
    </div>
  )
}


export default App
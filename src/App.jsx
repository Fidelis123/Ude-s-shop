import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopUp from './components/PopUp'

// Pages
import Home from './pages/Home'
import MensWear from './pages/MensWear'
import WomensWear from './pages/WomensWear'
import TopRated from './pages/TopRated'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import UserDashboard from './pages/UserDashboard'
import Wishlist from './pages/Wishlist'
import Liked from './pages/Liked'
import Cart from './pages/Cart'
import Checkout from './pages/CheckOut'
import ProductDetail from './pages/productDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import OrderSuccess from './pages/OrderSuccess'
import OrderHistory from './pages/OrderHistory'
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'

// Admin Pages
import AdminLogin from './admin/AdminLogin'
import Dashboard from './admin/Dashboard'
import ManageProducts from './admin/ManageProducts'
import ManageOrders from './admin/ManageOrders'
import ManageUsers from './admin/ManageUsers'
import AddProduct from './admin/AddProduct'
import EditProduct from './admin/EditProduct'

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-dark-four transition-all 
    duration-200 dark:text-white min-h-screen w-full overflow-x-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      
      <Routes>
        {/* ================= MAIN ROUTES ================= */}
        <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
        <Route path="/mens-wear" element={<MensWear />} />
        <Route path="/womens-wear" element={<WomensWear />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* ================= AUTH ROUTES ================= */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* ================= USER ROUTES ================= */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<ManageProducts />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="/admin/products/edit/:id" element={<EditProduct />} />
        <Route path="/admin/orders" element={<ManageOrders />} />
        <Route path="/admin/users" element={<ManageUsers />} />

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App
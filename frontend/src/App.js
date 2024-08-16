import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shopcategory from './Pages/ShopCategory'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import banner_men from './Components/Assets/banner_men.png'
import banner_women from './Components/Assets/banner_women.png'
import banner_kids from './Components/Assets/banner_kids.png'

 
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory  banner={banner_men} category="men" />} />
          <Route path='/womens' element={<Shopcategory  banner={banner_women} category="women" />} />
          <Route path='/kids' element={<Shopcategory  banner={banner_kids} category="kid" />} />
          <Route path="/product" element={<Product />}>
           <Route path=':productId' element={<Product />} />
           </Route>
           
           <Route path='/Cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>


    </div>
  )
}

export default App
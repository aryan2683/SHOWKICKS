import React, { useContext, useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'


const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext)
  const menuref = useRef();


  const dropdwon_toggle = (e) => {
    menuref.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');

  }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />

      </div>
      <img className="nav-dropdown" onClick={dropdwon_toggle} src={dropdown_icon} alt="" />
      <ul ref={menuref} className="nav-menu">
        <li onClick={() => { setMenu("Shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link> {menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids' >Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>LOGOUT</button> : <Link to='/login'><button>Login</button></Link>}

        <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>

    </div>
  )
}

export default Navbar;
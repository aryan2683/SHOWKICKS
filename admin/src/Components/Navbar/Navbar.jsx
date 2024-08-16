import React from 'react'
import './Navbar.css'
import navProfile from '../../Assets/nav-profile.svg';
import navlogo from  '../../Assets/nav-logo.svg';
const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='nav-logo' src={navlogo} alt="" />
        <img className='nav-profile' src={navProfile} alt="" />
    </div>
  )
}

export default Navbar
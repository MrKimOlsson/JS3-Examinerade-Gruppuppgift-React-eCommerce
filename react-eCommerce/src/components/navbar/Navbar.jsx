import React from 'react'
import Logo from '../../logo/logo.svg'
import './navbar.css'
import {FiSearch} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'


const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contacts</li>
          <li><FiSearch /></li>
          <li className='lowercase'>Login</li>
          <li><FaShoppingCart /></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
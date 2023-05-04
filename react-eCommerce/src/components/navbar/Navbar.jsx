import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../logo/logo.svg'
import './navbar.css'
import {FiSearch} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'


const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="logo">
          <Link to='/' ><img src={Logo} alt="" /></Link>
        </div>
        <ul>
          <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
          <li><NavLink className='nav-link' to='/products'>Products</NavLink></li>
          <li><NavLink className='nav-link' to='/contact'>Contact</NavLink></li>
          <li><FiSearch className='opacity height'/></li>
          <li><NavLink className='nav-link lowercase opacity' to='/login'>Login</NavLink></li>
          <li><NavLink className='nav-link ' to='/cart'><FaShoppingCart className='cart'/></NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar



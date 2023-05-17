import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../../logo/logo.svg'
import './navbar.css'
import {FiSearch} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // set isLoggedIn to false on logout
    localStorage.removeItem('user')
    console.log(localStorage.getItem('user')); // should log "null"
    navigate('/login');
  };

  const user = localStorage.getItem('user')
  const userInfo = JSON.parse(user)

  return (
    <>
      <nav className='navbar'>
        <div className="logo">
          <Link to='/' ><img src={Logo} alt="" /></Link>
        </div>
        <ul>
          <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
          <li><NavLink className='nav-link' to='/productDetails'>Details</NavLink></li>
          <li><NavLink className='nav-link' to='/products'>Products</NavLink></li>
          <li><NavLink className='nav-link' to='/contact'>Contact</NavLink></li>
          <li><FiSearch className='opacity height' /></li>
          {isLoggedIn ? ( // show the logout button if the user is logged in
            <>
              <li><NavLink className='nav-link lowercase user-name' to='/userprofile'>{userInfo && userInfo.firstName}</NavLink></li>
              <li><NavLink className='nav-link lowercase opacity' to='/login' onClick={handleLogout}>Logout</NavLink></li>
            </>
          ) : ( // show the login button if the user is logged out
            <>
              <li><NavLink className='nav-link lowercase opacity' to='/login'>Login</NavLink></li>
            </>
          )}
          <li><NavLink className='nav-link ' to='/cart'><FaShoppingCart className='cart' /></NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;



import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const ShopLayout = () => {
  return (
    <>
      {/* Varje outlet skriver bara ut de sidor som är children till layouten */}
      <Outlet />
    </>
  )
}

export default ShopLayout
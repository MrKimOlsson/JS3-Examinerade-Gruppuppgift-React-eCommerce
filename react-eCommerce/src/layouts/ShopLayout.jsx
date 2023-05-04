import React from 'react'
import { Outlet } from 'react-router-dom'

const ShopLayout = () => {
  return (
    <>
      <h1>Shop</h1>
      {/* Varje outlet skriver bara ut de sidor som är children till layouten */}
      <Outlet />
    </>
  )
}

export default ShopLayout
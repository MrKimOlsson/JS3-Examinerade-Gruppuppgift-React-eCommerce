import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
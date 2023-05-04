import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import GridMenu from '../components/grid/gridMenu/GridMenu'
import Grid from '../components/grid/Grid'
import GridButton from '../components/grid/gridButton/GridButton'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GridMenu />
      <Grid />
      <GridButton />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
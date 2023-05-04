import React from 'react'
// import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import GridMenu from '../components/grid/gridMenu/GridMenu'
import Grid from '../components/grid/Grid'
import GridButton from '../components/grid/gridButton/GridButton'

const Home = () => {
  return (
    <>
      <Hero />
      <GridMenu />
      <Grid />
      <GridButton />
    </>
  )
}

export default Home
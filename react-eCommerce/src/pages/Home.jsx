import React from 'react'
// import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import GridMenu from '../components/grid/gridMenu/GridMenu'
import Grid from '../components/grid/Grid'
import GridButton from '../components/grid/gridButton/GridButton'
import Footer from '../components/footer/Footer'
import SpecialOffers from '../components/specialOffers/SpecialOffers'

const Home = () => {
  return (
    <>
      <Hero />
      <GridMenu />
      <Grid />
      <GridButton />
      <SpecialOffers />
      <Footer />
    </>
  )
}

export default Home
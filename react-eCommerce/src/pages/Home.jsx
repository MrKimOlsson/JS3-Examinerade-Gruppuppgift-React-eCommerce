import React from 'react'
import Hero from '../components/hero/Hero'
import GridMenu from '../components/grid/gridMenu/GridMenu'
import Grid from '../components/grid/Grid'
import GridButton from '../components/grid/gridButton/GridButton'
import SpecialOffers from '../components/specialOffers/SpecialOffers'
import ProductCarousell from '../components/productCarousell/ProductCarousell'
import AdminPost from '../components/adminPost/AdminPost'

const Home = () => {
  return (
    <>
      <Hero />
      <GridMenu />
      <Grid />
      <GridButton />
      <SpecialOffers />
      <ProductCarousell />
      <AdminPost/>
    </>
  )
}

export default Home
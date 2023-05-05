import React from 'react'
import Grid from '../components/grid/Grid'
import Footer from '../components/footer/Footer'
import GridMenu from '../components/grid/gridMenu/GridMenu'
// import ProductsHero from '../components/products/productsHero/ProductsHero'
import WideHero from '../components/hero/WideHero'
import SpecialOffersWide from '../components/specialOffersWide/SpecialOffersWide'


function Shop() {
  return (
    <>
    <WideHero />
    <GridMenu />
    <Grid />
    <Grid />
    <SpecialOffersWide />
    </>
  )
}

export default Shop
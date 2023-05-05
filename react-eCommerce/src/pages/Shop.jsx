import React from 'react'
import Grid from '../components/grid/Grid'
import Footer from '../components/footer/Footer'
import GridMenu from '../components/grid/gridMenu/GridMenu'
import ProductsHero from '../components/products/productsHero/ProductsHero'


function Shop() {
  return (
    <>
    <ProductsHero />
    <GridMenu />
    <Grid />
    </>
  )
}

export default Shop
import React from 'react'
import Grid from '../components/universal/productGrid/Grid'
import GridMenu from '../components/universal/productGrid/gridMenu/GridMenu'
import WideHero from '../components/universal/wideHero/WideHero'
import SpecialOffersWide from '../components/products/specialOffersWide/SpecialOffersWide'


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
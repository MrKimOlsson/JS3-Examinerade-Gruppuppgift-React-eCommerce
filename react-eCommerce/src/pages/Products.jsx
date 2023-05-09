import React from 'react'
// import { useState, useEffect, useCallback } from 'react'
import LargeGrid from '../components/products/productGrid/largeGrid/LargeGrid'
import GridMenu from '../components/products/productGrid/gridMenu/GridMenu'
import WideHero from '../components/universal/wideHero/WideHero'
import SpecialOffersWide from '../components/products/specialOffersWide/SpecialOffersWide'

function Products() {
  return (
    <>
    <WideHero />
    <GridMenu />
    <LargeGrid/>
    <SpecialOffersWide />
    </>
  )
}

export default Products
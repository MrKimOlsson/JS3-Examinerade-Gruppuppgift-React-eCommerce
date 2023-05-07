import React from 'react'
// import { useState, useEffect, useCallback } from 'react'
import Grid from '../components/products/productGrid/Grid'
import GridMenu from '../components/products/productGrid/gridMenu/GridMenu'
import WideHero from '../components/universal/wideHero/WideHero'
import SpecialOffersWide from '../components/products/specialOffersWide/SpecialOffersWide'

// const [amount, setAmount] = useState([])

function Products() {
  return (
    <>
    <WideHero />
    <GridMenu />
    <Grid/>
    <SpecialOffersWide />
    </>
  )
}

export default Products
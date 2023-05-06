import React from 'react'
import WideHero from '../components/universal/wideHero/WideHero'
import Details from '../components/products/productDetails/Details'
import ProductInfo from '../components/products/productInformation/ProductInfo'

function ProductDetails() {
  return (
    <div>
      <WideHero />
      <Details />
      <ProductInfo />
    </div>
  )
}

export default ProductDetails
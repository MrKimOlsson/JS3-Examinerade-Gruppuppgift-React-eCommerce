import React from 'react'
import WideHero from '../components/universal/wideHero/WideHero'
import Details from '../components/products/productDetails/Details'
import ProductInfo from '../components/products/productInformation/ProductInfo'
import RelatedProducts from '../components/products/relatedProducts/RelatedProducts'

function ProductDetails() {
  return (
    <div>
      <WideHero />
      <Details />
      <ProductInfo />
      <RelatedProducts />
    </div>
  )
}

export default ProductDetails
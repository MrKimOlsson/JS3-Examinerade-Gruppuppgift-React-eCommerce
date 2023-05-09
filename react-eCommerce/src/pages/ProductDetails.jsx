import React from 'react'
import WideHero from '../components/universal/wideHero/WideHero'
import Details from '../components/products/productDetails/Details'
import ProductInfo from '../components/products/productInformation/ProductInfo'
import RelatedProducts from '../components/products/relatedProducts/RelatedProducts'
import SmallProductCarousell from '../components/products/smallCarousell/SmallProductCarousell'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export let product;

function ProductDetails() {

  
  const [product, setProduct] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch('http://localhost:9999/api/product/' + id)
      const data = await res.json()
      console.log(data)
      setProduct(data)
    }
    getProduct()
  }, [])

  
  // console.log(product.title)
  
  
  return (
    <div>
      {/* <p>{product.title}</p> */}
      <WideHero />
      <Details />
      <ProductInfo />
      <RelatedProducts />
      <SmallProductCarousell />
    </div>
  )
}

export default ProductDetails
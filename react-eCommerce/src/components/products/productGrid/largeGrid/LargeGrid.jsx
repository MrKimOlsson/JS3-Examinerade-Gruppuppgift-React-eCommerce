import React from 'react'
import { useState } from 'react'
import '../grid.css'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../../../product/Product'
import { useEffect } from 'react'
import { getAllProducts } from '../../../../features/products/productsSlice'

// import ProductListItem from '../../../productListItem/ProductListItem'
// import { useFetchAmount } from '../../../../hooks/useFetch'

const LargeGrid = () => {
  
  // Change the amount of products in the grid
  // let amount = 16;
  
  // const [url, setUrl] = useState('http://localhost:9999/api/product')
  // const { data: products, loading, error } = useFetchAmount(url, { method: 'GET' }, amount)

  const dispatch = useDispatch()
  const { products, error, loading } = useSelector(state => state.products)

  
  // console.log(products.length)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])



  return (

<div className='grid-component'>
        <div className='grid-container'>

            { loading && <p>Loading...</p> }
            { error && <p>{error}</p> }

            {
            products.length > 0
            ? products.map(product => <Product key={product._id} product={product} />)
            : <h2>No products to show</h2>
          }
        
      </div>
    </div>
  )
}

export default LargeGrid
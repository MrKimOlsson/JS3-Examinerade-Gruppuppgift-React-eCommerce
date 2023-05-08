import React from 'react'
import { useState } from 'react'
import './grid.css'
import ProductListItem from '../../productListItem.jsx/ProductListItem'
import { useFetchAmount } from "../../../hooks/useFetch"

const Grid = () => {
  
  // Change the amount of products in the grid
  let amount = 8;
  
  const [url, setUrl] = useState('http://localhost:9999/api/product')
  const { data: products, loading, error } = useFetchAmount(url, { method: 'GET' }, amount)

  return (

    <div className='grid-component'>
        <div className='grid-container'>

        { loading && <p>Loading...</p> }
        { error && <p>{error}</p> }

        { products && !loading && !error && products.map(product => (
          <ProductListItem key={product._id} product={product} />
        ))}
        
      </div>
    </div>
  )
}

export default Grid
import React from 'react'
import '../grid.css'
import Product from '../../../product/Product'

const LargeGrid = ({ products }) => {
  
  return (

    <div className='grid-component'>
        <div className='grid-container'>

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
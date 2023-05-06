import React from 'react'
import './productCarousell.css'
import CarousellHeading from './carousellHeading/CarousellHeading'
import Carousell from './carousell/Carousell'

const ProductCarousell = () => {
  return (
    <div className='productCarousell-wrapper'>
      <CarousellHeading />

        <div className='productCarousell-container'>
            <Carousell />
        </div>
    </div>
  )
}

export default ProductCarousell
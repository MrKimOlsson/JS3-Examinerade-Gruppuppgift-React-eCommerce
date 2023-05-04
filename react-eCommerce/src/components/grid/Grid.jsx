import React from 'react'
import './grid.css'
import ProductImage from '../../images/270x295.svg'

const Grid = () => {
  return (
    <div className='grid-component'>
      <div className='grid-container'>
        <div className='product-container'>
          <img src={ProductImage} alt="" />
          <div className='grid-text'>
            <p>Product title</p>
            <p>price</p>
          </div>
        </div>

        <div className='product-container'>
          <img src={ProductImage} alt="" />
          <div className='grid-text'>
            <p>Product title</p>
            <p>price</p>
          </div>
        </div>

        <div className='product-container'>
          <img src={ProductImage} alt="" />
          <div className='grid-text'>
            <p>Product title</p>
            <p>price</p>
          </div>
        </div>

        <div className='product-container'>
          <img src={ProductImage} alt="" />
          <div className='grid-text'>
            <p>Product title</p>
            <p>price</p>
          </div>
        </div>

        <div className='product-container'>
          <img src={ProductImage} alt="" />
          <div className='grid-text'>
            <p>Product title</p>
            <p>price</p>
          </div>
        </div>

        <div className='product-container'>
          <img src={ProductImage} alt="" />
          <div className='grid-text'>
            <p>Product title</p>
            <p>price</p>
          </div>
        </div>

        <div className='product-container'>
          <img src={ProductImage} alt="" />
          <div className='grid-text'>
            <p>Product title</p>
            <p>price</p>
          </div>
        </div>

        <div className='product-container'>
          <img src={ProductImage} alt="" />
          <div className='grid-text'>
            <p>Product title</p>
            <p>price</p>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Grid
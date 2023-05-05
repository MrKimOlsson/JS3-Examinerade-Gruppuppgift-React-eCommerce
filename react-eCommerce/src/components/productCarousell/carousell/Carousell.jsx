import React from 'react'
import './carousell.css'
import CarousellProductImage from '../../../images/270x295.svg'
import { MdOutlineAddShoppingCart } from 'react-icons/Md'

const Carousell = () => {
  return (
    <div className='carousellContainer'>
      <div className='carousellProduct'>
        <img src={CarousellProductImage} alt="" />
          <div className='carousellText'>
            <div className='carousellTitle'>
              <p>Product title</p>
            </div>
            <p>price</p>
          </div>
      </div>

      <div className='carousellProduct'>
        <img src={CarousellProductImage} alt="" />
          <div className='carousellText'>
            <div className='carousellTitle'>
              <p>Product title</p> <span><MdOutlineAddShoppingCart /></span>
            </div>
            <p>price</p>
          </div>
      </div>

      <div className='carousellProduct'>
        <img src={CarousellProductImage} alt="" />
          <div className='carousellText'>
            <p>Product title</p>
            <p>price</p>
          </div>
      </div>

      <div className='carousellProduct'>
        <img src={CarousellProductImage} alt="" />
          <div className='carousellText'>
            <p>Product title</p>
            <p>price</p>
          </div>
      </div>

      <div className='carousellProduct'>
        <img src={CarousellProductImage} alt="" />
          <div className='carousellText'>
            <p>Product title</p>
            <p>price</p>
          </div>
      </div>

      <div className='carousellProduct'>
        <img src={CarousellProductImage} alt="" />
          <div className='carousellText'>
            <p>Product title</p>
            <p>price</p>
          </div>
      </div>
          
    </div>
  )
}

export default Carousell
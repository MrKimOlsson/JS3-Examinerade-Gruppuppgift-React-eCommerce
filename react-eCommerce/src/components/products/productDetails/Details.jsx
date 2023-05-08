import React from 'react'
import { AiFillStar } from 'react-icons/Ai'
import './details.css'
import { MdOutlineAddShoppingCart } from 'react-icons/Md'
import BigImg from '../../../images/501x430.svg'
import SmallImg from '../../../images/120x113.svg'


const Details = () => {
  return (

    <div className='details-wrapper'>

      <div className='details-container'>

        <div className='img-wrapper'>
          <img src={BigImg} alt="Product image" srcSet="" />
          <div className='smallImg-wrapper'>
            <img src={SmallImg} alt="Product image" srcSet="" />
            <img src={SmallImg} alt="Product image" srcSet="" />
            <img src={SmallImg} alt="Product image" srcSet="" />
            <img src={SmallImg} alt="Product image" srcSet="" />
          </div>
        </div>
        <div className='text-wrapper'>
          <h3>Young Star Smart Shoe in Fashion</h3>
          <p>Lirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam <br />voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita <br />kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <div className='detailsLine'></div>
          <div className='reviews'>
            <div className='reviewStars'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className='review-count'>
                <p>16 Reviews</p>
            </div>
          </div>
          <p className='productDetailsPrice'>$30</p>

          <div className='addToCart'>
            <div className='productDetailsButtonWrapper'>
              <button>-</button>
              <div className='productDetailsProductAmount'><p>2</p></div>
              <button>+</button>
            </div>
            <button className='addToCartBtn'>Add to Cart <span className='addToCartBtnIcon'><MdOutlineAddShoppingCart /></span></button>
          </div>

          <div className='sku-wrapper'>
            <div className='sku-ball-wrapper'>
              <div className='ball red'></div>
              <div className='ball yellow'></div>
              <div className='ball green'></div>
            </div>
            <div className='sku-text-wrapper'>
              <p>SKU: N/A</p>
            </div>
          </div>

            <button className='wishlistBtn'>Add to wishlist</button>
            <p className='productDetailsCategory'>Category: Table Lamp, Light</p>
          </div>
        
      </div>
    </div>
  )
}

export default Details
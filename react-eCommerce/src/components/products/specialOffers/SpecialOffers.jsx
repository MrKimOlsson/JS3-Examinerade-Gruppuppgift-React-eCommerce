import React from 'react'
import './specialOffers.css'
import SpecialOffersImage from '../../../images/369x310.svg'
import { MdOutlineAddShoppingCart } from 'react-icons/Md'

const SpecialOffers = () => {
  return (
    <div className='specialOffers-container'>
        <div className='specialOffers-card'>
            <img className='specialOffers-image' src={SpecialOffersImage} alt="product image" />
            <div className='specialOffer-text'>
                <p className='specialOffer-title'>Table Lamp - scelerisque tempore</p>
                <div className='specialOffer-price'><p><span>$50.00</span></p> <p>$30.00</p><div></div> <MdOutlineAddShoppingCart /></div>
            </div>
        </div>

        <div className='specialOffers-card'>
            <div className='specialOffer-saletext'>
                <h4>Up to sell</h4>
                <h5>50% OFF</h5>
                <h6>Get The Best Price</h6>
                <p>Get the best daily offer et accusam et<br /> justo duo dolores et ea rebum. Stet<br /> clita kasd gubergren no sea taki</p>
                <p className='specialOffers-card-more'>Discover More</p>
            </div>
        </div>

        <div className='specialOffers-card'>
            <img src={SpecialOffersImage} alt="product image" />
            <div className='specialOffer-text'>
                <p className='specialOffer-title'>Table Lamp - scelerisque tempore</p>
                <div className='specialOffer-price'><p><span>$50.00</span></p> <p>$30.00</p><div></div> <MdOutlineAddShoppingCart /></div>
            </div>
        </div>
        
        
    </div>
  )
}

export default SpecialOffers
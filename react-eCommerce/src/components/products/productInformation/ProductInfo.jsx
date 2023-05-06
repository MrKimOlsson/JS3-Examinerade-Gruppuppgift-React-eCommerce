import React from 'react'
import ProductInfoMenu from './productInfoMenu/ProductInfoMenu'
import './productInfo.css'
import ProductImage from '../../../images/469x356.svg'

const ProductInfo = () => {
  return (
    
    <div className='product-info-component-wrapper'>
        <ProductInfoMenu />
        <div className='product-info-title-container'>

          <h3 className='product-info-title'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.</h3>
        </div>
        <div className='product-info-container'>
            <div className='product-info-text'>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br />
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et cusam et justo duo dolores et <br />
                ea rebum. Stet clita kasd gubergren, no sea takimata santus est Lorem ipsum dolor sit amet. Lorem ipsum dolor.<br />
                <br />
                accusantium laborum pretium hic excepturi harum repellat facilisis convallis potenti, <br />
                adipiscing lectus aliqua. Asperiores repudiandae ipsam error erat, accusamus, cum taciti <br />
                unde?<br />
                <br />
                Praesentium, pariatur, tempora consequuntur purus sapiente, iaculis vitae consequatur, <br />
                rhoncus earum eleifend, hendrerit ipsum rhoncus ex error, impedit! Alias laboris sequi curae <br />
                aptent? Eu sagittis eu, distinctio tortor? Dapibus delectus! Consequuntur luctus.<br />
                <br />
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br />
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et <br />
                cusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata santus est Lorem 
                ipsum dolor sit amet. Lorem ipsum dolor.
                </p>
             </div>
              <div className='product-info-img-container'>
                <img src={ProductImage} alt="" srcset="" />
              </div>
        </div>



    </div>
  )
}

export default ProductInfo
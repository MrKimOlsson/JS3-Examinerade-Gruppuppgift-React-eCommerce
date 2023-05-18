import React, { forwardRef } from 'react'
import './carousell.css'
// import CarousellProductImage from '../../../../images//270x295.svg'
// import { MdOutlineAddShoppingCart } from 'react-icons/Md'
import { useFetch } from "../../../../hooks/useFetch"
import { useState } from 'react'

const Carousell = forwardRef((props, ref) => { 

  const [url, setUrl] = useState('http://localhost:9999/api/product')
    let amount = 1;
  
  const { data: products, loading, error } = useFetch(url, { method: 'GET' }, amount)
    
  return (
    <div className='carousellContainer' ref={ref}>
      {products && products.map((product) => (
      <div className='carousellProduct' key={product._id}>
        <img src={product.imageURL[0]} className='carousellimg' alt="" />
          <div className='carousellText'>
          <div className='carousellTitle'>
            <p>{product.title}</p>
          </div>
        <p>{product.price}</p>
      </div>
    </div>
))}
  </div>
)

}
)
export default Carousell










  //     <div className='carousellProduct'>
  //       <img src={CarousellProductImage} alt="" />
  //         <div className='carousellText'>
  //           <div className='carousellTitle'>
  //             <p>Product title</p> <span><MdOutlineAddShoppingCart /></span>
  //           </div>
  //           <p>price</p>
  //         </div>
  //     </div>

  //     <div className='carousellProduct'>
  //       <img src={CarousellProductImage} alt="" />
  //         <div className='carousellText'>
  //           <p>Product title</p>
  //           <p>price</p>
  //         </div>
  //     </div>

  //     <div className='carousellProduct'>
  //       <img src={CarousellProductImage} alt="" />
  //         <div className='carousellText'>
  //           <p>Product title</p>
  //           <p>price</p>
  //         </div>
  //     </div>

  //     <div className='carousellProduct'>
  //       <img src={CarousellProductImage} alt="" />
  //         <div className='carousellText'>
  //           <p>Product title</p>
  //           <p>price</p>
  //         </div>
  //     </div>

  //     <div className='carousellProduct'>
  //       <img src={CarousellProductImage} alt="" />
  //         <div className='carousellText'>
  //           <p>Product title</p>
  //           <p>price</p>
  //         </div>
  //     </div>
          
  //   </div>
  // )

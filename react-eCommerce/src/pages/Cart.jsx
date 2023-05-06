import React from 'react'
import CartItems from '../components/cart/cartItems/CartItems'
import TotalSum from '../components/cart/totalSum/TotalSum'

function Cart() {
  return (
    <>
      <div className="cart-wrapper">
        <div className="cartItem-wrapper">
          <h2>Cart (1 item)</h2>
          <p className='ci-p'>Shipped by Bmarkedo</p>
          <CartItems />
          <CartItems />
        </div>
        <TotalSum />
      </div>
      
    </>
  )
}

export default Cart
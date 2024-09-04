import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  const {all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <div className='cartitems-farmat'>
          <img src='' alt='' className='carticon-product-icon' />
          <p></p>
          <p></p>
          <button className='cartitems-quantity'></button>
          <p></p>
          <img src={remove_icon} onClick={()=>{removeFromCart()}} alt='' />
        </div>
        <hr />
      </div>
    </div>
  )
}

export default CartItems

//2.36.18

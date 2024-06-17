import React from 'react'
import { useCart } from './context/CartContext'
const UserCart = () => {

    const{cartItems,addTOCart} = useCart()
  return (
    <div>
      {cartItems.map((items)=>{
        return(
            <div className="cart-section">
                <div className="cart-img">
                    <img src={items.image} alt="" />
                </div>
                <div className="cart-details">
                    <h3>{items.product}</h3>
                    <h2>
                        {items.price}
                    </h2>
                    <h3>
                        {items.model}
                    </h3>
                </div>
            </div>
        )
      })}

    </div>
  )
}

export default UserCart

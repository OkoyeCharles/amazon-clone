import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, rating, price}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove item from cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }


  return (  
    <div className="checkoutProduct">
      <img className='checkoutProduct__image' src={image} alt="checkout-image"/>

      <div className="checkoutProduct__info">

        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => <p>⭐</p>)
          }
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
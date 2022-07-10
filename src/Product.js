import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, image, title, rating, price}) {
  const [{basket}, dispatch] = useStateValue();

  const addtoCart = () => {
    // dispatch item to data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className='product'>
      <img src={image}></img>
      <div className='product__info'>     
        <p>{title}</p>
        <div className='product__rating'>
          {Array(rating).fill().map((_, i) => <p>⭐</p>)}
        </div>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <button onClick={addtoCart}>Add to Cart</button>
    </div>
  )
}

export default Product
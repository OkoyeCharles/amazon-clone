import React from 'react';
import './Product.css';

function Product({image, title, rating, price}) {
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
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
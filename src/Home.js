import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='Home'>
      <div className='home__container'>
        <img className='home__image' alt="null" src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'/>
      </div>

      <div className='home__row'>
        <Product 
          image={'https://m.media-amazon.com/images/I/71eyqrWrDpS._AC_UL320_.jpg'} 
          title={'ASUS VivoBook Flip 14 Thin and Light 2-in-1 Laptop, 14” FHD Touch, 11th Gen'} rating = {4}
          price = {403.46}/>
        <Product 
          image={'https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UL320_.jpg'} 
          title={'2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD)'} rating = {5}
          price = {2446.99}/>
      </div>

      <div className='home__row'>
        <Product 
          image={'https://m.media-amazon.com/images/I/61kYwdMmD-L._AC_UY218_.jpg'} 
          title={'Apple iPhone 12 Pro, 128GB, Graphite - Unlocked (Renewed Premium)'} rating = {5}
          price = {1189.99}/>

        <Product 
          image={'https://m.media-amazon.com/images/I/61V7G4oREVL._AC_UY218_.jpg'} 
          title={'Apple iPhone Xs, 256GB, Space Gray - Fully Unlocked.'} rating = {4}
          price = {688.79}/>

        <Product 
          image={'https://m.media-amazon.com/images/I/817aOXLoNpL._AC_UY218_.jpg'} 
          title={'SAMSUNG Galaxy S22 Ultra Cell Phone, 128GB, 8K Camera & Video.'} rating = {4}
          price = {1110.09}/>
      </div>

      <div className='home__row'>     
        <Product 
          image={'https://m.media-amazon.com/images/I/818jj0DF-dL._AC_UL320_.jpg'} 
          title={'SAMSUNG 49" S95UA Super Ultrawide Dual QHD Monitor, 4ms, QLED, DisplayHDR 400, USB-C, USB Hub, 120Hz, FreeSync, Height Adjustable Stand, 2022, Charcoal Black'} rating = {3}
          price = {2999.99}/>
      </div>

    </div>
  )
}

export default Home
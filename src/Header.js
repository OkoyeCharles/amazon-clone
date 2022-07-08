import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header() {
  return (
    <div className='header'>
      <img className="header__logo" alt="logo" src='https://pngimg.com/uploads/amazon/small/amazon_PNG25.png'/>
      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className='header__searchIcon'/>
      </div>
      <div className="header__nav">

        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className='header__optionBasket'>
          <span className='header__optionLineTwo header__CartCount'>0</span>
          <ShoppingCartIcon className='header__Cart'/>
        </div>
      </div>
    </div>
  )
}

export default Header
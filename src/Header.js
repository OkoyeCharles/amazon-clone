import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';



function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img className="header__logo" alt="logo" src='https://pngimg.com/uploads/amazon/small/amazon_PNG25.png'/> 
      </Link>
      
      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className='header__searchIcon'/>
      </div>
      <div className="header__nav">
        <Link to='/login'>
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <span className='header__optionLineTwo header__CartCount'>{basket.length || 0}</span>
            <ShoppingCartIcon className='header__Cart'/>
          </div>
        </Link>
       
      </div>
    </div>
  )
}

export default Header
import React, {Fragment} from 'react'
import './Subtotal.css'
// import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate(); 
  const [{basket}, dispatch] = useStateValue();

  // Create our currency formatter
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="subtotal">    
        <Fragment>
          <p>
            Subtotal ({basket.length || 0} items): 
              <strong> {currency.format(getCartTotal(basket))}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" />
            This order Contains a gift
          </small>
        </Fragment>
      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
import React, {Fragment} from 'react'
import './Subtotal.css'
// import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">    
        <Fragment>
          <p>
            Subtotal ({basket.length || 0} items): 
              <strong>{getCartTotal(basket)}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" />
            This order Contains a gift
          </small>
        </Fragment>
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
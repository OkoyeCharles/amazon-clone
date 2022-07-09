import React, {Fragment} from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal ({basket.length || 0} items): 
                <strong>{
                basket.reduce((total, item) => total += item.price, 0)
                }</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order Contains a gift
            </small>
          </Fragment>
        )}
        decimalScale={2}
        value={0}
        displayType ={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
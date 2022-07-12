import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getCartTotal } from './reducer';
import axios from './axios';

function Payment() {
  const navigate = useNavigate();
  const [{basket, user}, dispatch] = useStateValue();

  // Create our currency formatter
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(false)

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // Generate Stripe Secret to charge Customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // Stripe expects the total in currency sub-Units
        url: `/payments/create?total=${getCartTotal(basket) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
  }, [basket])
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true);


    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      // paymentIntent = payment confirmation

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      navigate('/orders')
    })
  }

  const handleChange = (e) => {
    // listen for Changes in Card Element
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '')
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length || 0} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : 'User'}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(item => 
              <CheckoutProduct 
                id = {item.id}
                image = {item.image}
                title = {item.title}
                rating = {item.rating}
                price = {item.price}
              />
            )}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
              {/* Stripe */}

              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>

                <div className="payment__priceContainer">
                  <h3>Order Total: {currency.format(getCartTotal(basket))}</h3>
                  <button disabled = {processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>

                {error && <div>{error}</div>}
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
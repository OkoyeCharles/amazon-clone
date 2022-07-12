import React, { Fragment, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51LKikxJIr5sMtV8TVVCP3FSBVbFYb87a2Al30jAkasBgTDe61U02aRDd5ZJKT68wknB9Woa8ZNReOfSBs1Q3Ip6g00TdXWcbbN')

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Runs Once When App Loads

    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // The user just / has logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // The user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
            
    })

    
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        
        <Routes>
          {/* Home Component */}
          <Route path="/" element = {<Fragment><Header/><Home/></Fragment>}/>

          {/* Checkout Component */}
          <Route path="/checkout" element = {<Fragment><Header/><Checkout/></Fragment>} />

          {/* Login Component */}
          <Route path="/login" element = {<Login/>}/>

          {/* Payment Component */}
          <Route path="/payment" element = {
            <Fragment>
              <Header/>
              <Elements stripe={promise}><Payment/></Elements>
            </Fragment>
          }/>
          
        </Routes>     
      </div>
    </Router>
  );
}

export default App;

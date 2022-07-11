import React, { Fragment, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Runs Once When App Loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>> ', authUser)
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
          
        </Routes>     
      </div>
    </Router>
  );
}

export default App;

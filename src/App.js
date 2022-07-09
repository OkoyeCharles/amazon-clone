import React, { Fragment } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';

function App() {
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

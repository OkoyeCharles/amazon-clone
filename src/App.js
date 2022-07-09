import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout';

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        {/* Header will be rendered Regardless of the Page */}
        <Header/>
        <Routes>
          {/* Home Component */}
          <Route path="/" element = {<Home/>}/>

          {/* Checkout Component */}
          <Route path="/checkout" element = {<Checkout/>} />
          
        </Routes>     
      </div>
    </Router>
  );
}

export default App;

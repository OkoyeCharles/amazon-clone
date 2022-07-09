import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element = {<div><Header/><Home/></div>} />
        </Routes>     
      </div>
    </Router>
  );
}

export default App;

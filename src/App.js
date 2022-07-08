import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';

function App() {
  return (
    // BEM
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;

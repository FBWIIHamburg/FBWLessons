import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Body from './components/Body/Body'

function App() {
  return (
    <div className="App">
      <Header />
        <Body />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import '../../global.css'
import Navbar from '../navbar'
import Feature from '../feature'
import About from '../about'
import Portfolio from '../portfolio'
import Contact from '../contact'

function App() {
  return (
    <>
      <Navbar />
      <Feature />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Feature from './Views/Feature.jsx';
import About from './Views/About.jsx';
import Portfolio from './Views/Portfolio.jsx';
import Contact from './Views/Contact.jsx';

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
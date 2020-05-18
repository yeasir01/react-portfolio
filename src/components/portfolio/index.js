import React from 'react';
import './style.css';
import Carousel from './carousel'

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="container min-vh-100 d-flex align-items-center">
        <Carousel />
      </div>
    </div>
  );
}

export default Portfolio;

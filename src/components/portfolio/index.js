import React from 'react';
import './style.css';
import Carousel from './carousel'

function Portfolio() {
  return (
    <>
      <div id="portfolio" className="anchor"></div>
      <div className="min-vh-100 d-flex align-items-center portfolio">
        <div className="container ">
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default Portfolio;

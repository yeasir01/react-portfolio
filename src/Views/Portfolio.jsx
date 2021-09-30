import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Project from '../Components/Project.jsx';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export default function Portfolio() {
  return (
    <>
      <div id="portfolio" className="anchor"></div>
      <div className="min-vh-100 d-flex align-items-center portfolio">
        <div className="container ">
          <OwlCarousel
            className="owl-theme"
            loop
            autoplay
            autoplayHoverPause
            autoplayTimeout="5000"
            items="1"
            center="true"
            animateIn="true"
          >
            <Project />

          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

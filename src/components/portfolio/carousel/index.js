import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Projects from './projects'

function Carousel (){
    return(
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
            <Projects />

        </OwlCarousel>
    )
}

export default Carousel;
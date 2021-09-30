import React from 'react';
import Laptop from '../Assets/img/feature-img.png';

export default function Feature() {
    return (
        <div id="home" className="bg-hero">
            <div className="container-fluid pr-0 overflow-hidden">
                <div className="row min-vh-100">
                    <div className="col-md-6 col-sm-12 my-auto">
                        <div className="landing-content text-center animate__animated animate__fadeInLeft">
                            <p className="text-uppercase mb-1">Hey there!</p>
                            <h2 className="text-uppercase mb-1">I'm yeasir</h2>
                            <p className="text-uppercase mb-4">A Full Stack Web Developer</p>
                            <a className="btn btn-outline-dark rounded-sm text-uppercase px-4 py-2
                        " href="#portfolio" role="button">view work</a>
                        </div>
                    </div>
                    <div className="col-md-6 text-right my-auto pt-5 d-none d-md-block">
                        <img src={Laptop} alt="laptop with vs code displayed"
                            className="feature-img img-fluid py-4 animate__animated animate__fadeInRight" />
                    </div>
                </div>
            </div>
        </div>
    );
};
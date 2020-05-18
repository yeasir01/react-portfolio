import React from 'react';
import './style.css';

function About() {
  return (
      <div id="about" className="min-vh-100 my-5">
            <div className="container">
                <div className="row min-vh-100">
                    <div className="col-lg-3 col-md-4 col-sm-12 my-auto p-0">
                        <div className="container about-cir">
                            <h2>about.</h2>
                        </div>
                    </div>

                    <div
                        className="col-lg-9 col-md-8 col-sm-12 my-auto text-center text-md-left text-lg-left border-left pl-4">
                        <p>Technology has always been an integral part of my life and has served as a personal passion
                            of mine. As a child, I would always
                            take things apart and attempt to put them back together (sometimes unsuccessfully) - in
                            order to better understand the technology, architecture and engineering behind the product.
                            Those experiences fueled my interest in computer hardware and software. Throughout my
                            teenage and early adult years, I became more proficient in knowing how to build, customize
                            and repair computers and laptops. As I have progressed in my professional life, I have
                            adapted those skills to other technologies, which I now use to grow and scale my businesses.
                            I am now focusing on learning code, so that I may use those skills to develop custom
                            software and applications that could be used for my current and future business
                            opportunities.</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/yeasir01"><i
                                className="fab fa-github so-icon text-dark"></i></a>
                        <a href="#1"><i className="fab fa-linkedin so-icon text-dark"></i></a>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default About;
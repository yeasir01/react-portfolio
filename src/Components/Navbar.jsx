import React from 'react';
import logo from '../Assets/img/hex_logo.png'


export default function Feature() {

    const collapse = () => {
        let elment = document.getElementById('navbarNav')
        elment.classList.remove("show")
    }

    return (
        <>
            <header>
                <nav id="navbar" className="fixed-top navbar navbar-expand-lg navbar-light animate__animated animate__fadeInDown animate__faster">
                    <div className="container-fluid px-4">
                        <a className="navbar-brand" href="index.html">
                            <img src={logo} width="auto" height="45" alt="code logo" />
                        </a>
                        <button className="navbar-toggler rounded-0 ml-auto" type="button" data-toggle="collapse"
                            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item" onClick={collapse}>
                                    <a className="nav-link rounded-0" href="#home">Home </a>
                                </li>
                                <li className="nav-item" onClick={collapse}>
                                    <a className="nav-link rounded-0" href="#about">About</a>
                                </li>
                                <li className="nav-item" onClick={collapse}>
                                    <a className="nav-link rounded-0" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item" onClick={collapse}>
                                    <a className="nav-link rounded-0" href="#contact">Contact Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

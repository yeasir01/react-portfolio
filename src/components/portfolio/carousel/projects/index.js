import React from 'react';
import weatherImg from './images/weather-api.png';
import quizImg from './images/trivia_quiz.png';
import passGenImg from './images/password-gen.png';
import safetyGuruImg from './images/safety-guru.png';
import jsSchdImg from './images/js-sched.png';
import './style.css'

function Projects(){
 return(
    <>
        <div className="row item">
            <div className="col-md-6 col-sm-12">
                <div className="container">
                    <img className="img-fluid shadow-sm" src={weatherImg} alt="weather app" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-small mt-md-0">
                <div className="container">
                    <div><h1 className="d-none d-md-block">Weather Dashboard</h1></div>
                    <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas placeat laboriosam impedit praesentium numquam magnam. Error, porro similique. Nisi aperiam deserunt maiores quaerat at doloremque voluptas incidunt atque. Ullam?</p></div>
                    <div className="tech-icons">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-bootstrap"></i>
                        <i className="fab fa-js"></i>
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="mt-4 d-flex">
                        <a href="https://github.com/yeasir01/weather-dashboard" 
                        target="_blank" rel="noopener noreferrer" 
                        className="btn btn-outline-dark rounded-sm mr-2 col-sm-6 col-md-4">Repo</a>
                        
                        <a href="https://yeasir01.github.io/weather-dashboard/" 
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline-dark rounded-sm col-sm-6 col-md-4">Website</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row item">
            <div className="col-md-6 col-sm-12">
                <div className="container">
                    <img className="img-fluid shadow-sm" src={quizImg} alt="quiz app" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-small mt-md-0">
                <div className="container">
                    <div><h1 className="d-none d-md-block">Triva Quiz</h1></div>
                    <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas placeat laboriosam impedit praesentium numquam magnam. Error, porro similique. Nisi aperiam deserunt maiores quaerat at doloremque voluptas incidunt atque. Ullam?</p></div>
                    <div className="tech-icons">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js"></i>
                    </div>
                    <div className="mt-4 d-flex">
                        <a href="https://github.com/yeasir01/timed-quiz" 
                        target="_blank" rel="noopener noreferrer" 
                        className="btn btn-outline-dark rounded-sm mr-2 col-sm-6 col-md-4">Repo</a>
                        
                        <a href="https://yeasir01.github.io/timed-quiz/" 
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline-dark rounded-sm col-sm-6 col-md-4">Website</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row item">
            <div className="col-md-6 col-sm-12">
                <div className="container">
                    <img className="img-fluid shadow-sm" src={passGenImg} alt="weather app" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-small mt-md-0">
                <div className="container">
                    <div><h1 className="d-none d-md-block">Password Generator</h1></div>
                    <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas placeat laboriosam impedit praesentium numquam magnam. Error, porro similique. Nisi aperiam deserunt maiores quaerat at doloremque voluptas incidunt atque. Ullam?</p></div>
                    <div className="tech-icons">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js"></i>
                    </div>
                    <div className="mt-4 d-flex">
                        <a href="https://github.com/yeasir01/password-generator" 
                        target="_blank" rel="noopener noreferrer" 
                        className="btn btn-outline-dark rounded-sm mr-2 col-sm-6 col-md-4">Repo</a>
                        
                        <a href="https://yeasir01.github.io/password-generator/" 
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline-dark rounded-sm col-sm-6 col-md-4">Website</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row item">
            <div className="col-md-6 col-sm-12">
                <div className="container">
                    <img className="img-fluid shadow-sm" src={jsSchdImg} alt="employee scheduler app" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-small mt-md-0">
                <div className="container">
                    <div><h1 className="d-none d-md-block">JS Scheduler</h1></div>
                    <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas placeat laboriosam impedit praesentium numquam magnam. Error, porro similique. Nisi aperiam deserunt maiores quaerat at doloremque voluptas incidunt atque. Ullam?</p></div>
                    <div className="tech-icons">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js"></i>
                        <i className="fab fa-node-js"></i>
                        <i className="fas fa-database"></i>
                    </div>
                    <div className="mt-4 d-flex">
                        <a href="https://github.com/thebigdeal916/project-2" 
                        target="_blank" rel="noopener noreferrer" 
                        className="btn btn-outline-dark rounded-sm mr-2 col-sm-6 col-md-4">Repo</a>
                        
                        <a href="https://whispering-fjord-97203.herokuapp.com/" 
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline-dark rounded-sm col-sm-6 col-md-4">Website</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row item">
            <div className="col-md-6 col-sm-12">
                <div className="container">
                    <img className="img-fluid shadow-sm" src={safetyGuruImg} alt="safety guru app" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-small mt-md-0">
                <div className="container">
                    <div><h1 className="d-none d-md-block">Safety Guru</h1></div>
                    <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas placeat laboriosam impedit praesentium numquam magnam. Error, porro similique. Nisi aperiam deserunt maiores quaerat at doloremque voluptas incidunt atque. Ullam?</p></div>
                    <div className="tech-icons">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js"></i>
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="mt-4 d-flex">
                        <a href="https://github.com/yeasir01/safety-guru" 
                        target="_blank" rel="noopener noreferrer" 
                        className="btn btn-outline-dark rounded-sm mr-2 col-sm-6 col-md-4">Repo</a>
                        
                        <a href="https://yeasir01.github.io/safety-guru/" 
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline-dark rounded-sm col-sm-6 col-md-4">Website</a>
                    </div>
                </div>
            </div>
        </div>
        
        
    </>
 )   
}

export default Projects;
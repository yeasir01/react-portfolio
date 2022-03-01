import React from 'react';
import weatherImg from '../Assets/img/weather-api.png';
import quizImg from '../Assets/img/trivia_quiz.png';
import passGenImg from '../Assets/img/password-gen.png';
import safetyGuruImg from '../Assets/img/safety-guru.png';
import trvCli from '../Assets/img/trivia-cli.png';

export default function Project() {

    const List = [{
        img: weatherImg,
        imgDesc: "weather app",
        title: "Weather Dashboard",
        description: `A web app used to lookup the 5 day forecast for a given city or zip code. 
        The app communicates with the the OpenWeather API and stores the recently visited searches 
        on the left panel during your browsing session. Technologies used in this project were HTML, 
        CSS, JS, BootStrap and jQuery.`,
        liveLink: "https://yeasir01.github.io/weather-dashboard/",
        repoLink: "https://github.com/yeasir01/weather-dashboard",
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-bootstrap", "fab fa-js", "fas fa-cog"]
    }, {
        img: quizImg,
        imgDes: "quiz app",
        title: "Trivia Quiz",
        description: `A simple time based trivia quiz that utilizes the power of CSS grid box. The player 
        will be asked a series of multiple choice questions. If the player answerers incorrectly or skips 
        ahead they will lose 15sec with no more time on the clock its game over. Answer correct and move forward. 
        Scores are based on how quickly you answer and how much time was left on the clock`,
        liveLink: "https://yeasir01.github.io/timed-quiz/",
        repoLink: "https://github.com/yeasir01/timed-quiz",
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"]
    }, {
        img: passGenImg,
        imgDes: "password generator app",
        title: "Password Generator",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas placeat laboriosam impedit praesentium numquam magnam. Error, porro similique. Nisi aperiam deserunt maiores quaerat at doloremque voluptas incidunt atque. Ullam?",
        liveLink: "https://yeasir01.github.io/password-generator/",
        repoLink: "https://github.com/yeasir01/password-generator",
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"]
    },{
        img: safetyGuruImg,
        imgDes: "safety guru app",
        title: "Safety Guru",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas placeat laboriosam impedit praesentium numquam magnam. Error, porro similique. Nisi aperiam deserunt maiores quaerat at doloremque voluptas incidunt atque. Ullam?",
        liveLink: "https://yeasir01.github.io/safety-guru/",
        repoLink: "https://github.com/yeasir01/safety-guru",
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js", "fas fa-cog"]
    },{
        img: trvCli,
        imgDes: "safety guru app",
        title: "Trivia-CLI",
        description: `A game played in the command line. You'll 
        start by setting a few parameters, then you will be presented 
        with a set of questions. Once all questions have been answered, a table displaying the 
        correct answers and your score will be generated. All questions are generated from the 
        "Open Trivia API" library of more than 4000 community sourced questions.`,
        liveLink: "https://github.com/yeasir01/trivia-cli",
        repoLink: "https://github.com/yeasir01/trivia-cli",
        techStack: ["fab fa-node-js", "fas fa-cog", "fab fa-npm"]
    }];

    return (
        <>
            {List.map((item, idx) => (
                <div className="row item" key={idx}>
                    <div className="col-md-6 col-sm-12">
                        <div className="container">
                            <img className="img-fluid shadow-sm" src={item.img} alt={item.imgDesc} />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-small mt-md-0">
                        <div className="container">
                            <div><h1 className="d-none d-md-block">{item.title}</h1></div>
                            <div><p>{item.description}</p></div>
                            <div className="tech-icons">
                                {item.techStack.map((icon, idx) => <i className={icon} key={idx}></i>)}
                            </div>
                            <div className="mt-4 d-flex">
                                <a href={item.repoLink}
                                    target="_blank" rel="noopener noreferrer"
                                    className="btn btn-outline-dark rounded-sm mr-2 col-sm-6 col-md-4">Repo</a>

                                <a href={item.liveLink}
                                    target="_blank" rel="noopener noreferrer"
                                    className="btn btn-outline-dark rounded-sm col-sm-6 col-md-4">Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};
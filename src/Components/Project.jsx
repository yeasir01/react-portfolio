import React from 'react';
import weatherImg from '../Assets/img/weather-api.png';
import quizImg from '../Assets/img/trivia_quiz.png';
import passGenImg from '../Assets/img/password-gen.png';
import safetyGuruImg from '../Assets/img/safety-guru.png';
import jsSchdImg from '../Assets/img/js-sched.png';

export default function Project() {

    const List = [{
        img: weatherImg,
        imgDesc: "weather app",
        title: "Weather Dashboard",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas placeat laboriosam impedit praesentium numquam magnam. Error, porro similique. Nisi aperiam deserunt maiores quaerat at doloremque voluptas incidunt atque. Ullam?",
        liveLink: "https://yeasir01.github.io/weather-dashboard/",
        repoLink: "https://github.com/yeasir01/weather-dashboard",
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-bootstrap", "fab fa-js", "fas fa-cog"]
    }, {
        img: quizImg,
        imgDes: "quiz app",
        title: "Triva Quiz",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas placeat laboriosam impedit praesentium numquam magnam. Error, porro similique. Nisi aperiam deserunt maiores quaerat at doloremque voluptas incidunt atque. Ullam?",
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
    }, {
        img: jsSchdImg,
        imgDes: "employee scheduler app",
        title: "JS Scheduler",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas placeat laboriosam impedit praesentium numquam magnam. Error, porro similique. Nisi aperiam deserunt maiores quaerat at doloremque voluptas incidunt atque. Ullam?",
        liveLink: "https://whispering-fjord-97203.herokuapp.com/",
        repoLink: "https://github.com/thebigdeal916/project-2",
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js", "fab fa-node-js", "fas fa-database"]
    }, {
        img: safetyGuruImg,
        imgDes: "safety guru app",
        title: "Safety Guru",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas placeat laboriosam impedit praesentium numquam magnam. Error, porro similique. Nisi aperiam deserunt maiores quaerat at doloremque voluptas incidunt atque. Ullam?",
        liveLink: "https://yeasir01.github.io/safety-guru/",
        repoLink: "https://github.com/yeasir01/safety-guru",
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js", "fas fa-cog"]
    },];

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
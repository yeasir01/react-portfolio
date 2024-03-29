import React from "react";
import weatherImg from "../Assets/img/weather-api.png";
import quizImg from "../Assets/img/trivia_quiz.png";
import passGenImg from "../Assets/img/password-gen.png";
import trvCli from "../Assets/img/trivia-cli.png";
import chatterImg from "../Assets/img/chatter.png";

const list = [
    {
        img: chatterImg,
        imgDes: "chatter messaging",
        title: "Chatter Messaging",
        description: `Developed with Node.js, Socket.io, React, 
            and Auth0, showcases my full-stack expertise. It integrates 
            secure Google Social Login and Email/Password sign-up, 
            offering dynamic group and private chats, real-time notifications, 
            and theme personalization.`,
        repoLink: "https://github.com/yeasir01/chatter",
        liveLink: "https://chatter.yeasirhugais.com",
        techStack: ["fab fa-node-js", "fas fa-bolt", "fas fa-cog", "fab fa-react", "fas fa-database"],
    },
    {
        img: weatherImg,
        imgDesc: "weather app",
        title: "Weather Dashboard",
        description: `Lookup the 5 day forecast for a given city or zip code. 
                        The app communicates with the the OpenWeather API and stores the recently visited searches 
                        on the left panel during your browsing session. Technologies used in this project were HTML, 
                        CSS, JS, BootStrap and jQuery.`,
        liveLink: "https://yeasir01.github.io/weather-dashboard/",
        repoLink: "https://github.com/yeasir01/weather-dashboard",
        techStack: [
            "fab fa-html5",
            "fab fa-css3-alt",
            "fab fa-bootstrap",
            "fab fa-js",
            "fas fa-cog",
        ],
    },
    {
        img: quizImg,
        imgDes: "quiz app",
        title: "Trivia Quiz",
        description: `A time based trivia quiz that utilizes the power of CSS grid box. you 
            will be asked a series of multiple choice questions. Get the right answer and move forward. 
            If you answer incorrectly or skips 
            ahead you will loose 15 seconds, with no more time on the clock its game over! 
            Scores are calculated based on how quickly you can complete the challenges.`,
        liveLink: "https://yeasir01.github.io/timed-quiz/",
        repoLink: "https://github.com/yeasir01/timed-quiz",
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
    },
    {
        img: passGenImg,
        imgDes: "password generator app",
        title: "Password Generator",
        description: `A sleek password generator for quick and easy 
            password creation. Using JavaScript's Math.random, it generates 
            seemingly random passwords, striking a balance between simplicity 
            and functionality. Perfect for everyday use, it's a handy tool 
            for crafting passwords without the fuss.`,
        liveLink: "https://yeasir01.github.io/password-generator/",
        repoLink: "https://github.com/yeasir01/password-generator",
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
    },
    {
        img: trvCli,
        imgDes: "safety guru app",
        title: "Trivia-CLI",
        description: `A game played in the command line. You'll 
            start by answering a few configuration questions, then you will be presented 
            with a set of trivia challenges. All questions are generated from the 
            "Open Trivia" API of more than 4000 community sourced questions.`,
        repoLink: "https://github.com/yeasir01/trivia-cli",
        techStack: ["fab fa-node-js", "fas fa-cog", "fab fa-npm"],
    },
];

export default function Project() {

    return (
        <>
            {list.map((item, idx) => (
                <div className="row item" key={idx}>
                    <div className="col-md-6 col-sm-12">
                        <div className="container">
                            <img
                                loading="lazy"
                                className="img-fluid shadow-sm"
                                src={item.img}
                                alt={item.imgDesc}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-small mt-md-0">
                        <div className="container">
                            <div>
                                <h1 className="d-none d-md-block">
                                    {item.title}
                                </h1>
                            </div>
                            <div>
                                <p>{item.description}</p>
                            </div>
                            <div className="tech-icons">
                                {item.techStack.map((icon, idx) => (
                                    <i className={icon} key={idx}></i>
                                ))}
                            </div>
                            <div className="mt-4 d-flex">
                                <a
                                    href={item.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-dark rounded-sm mr-2 col-sm-6 col-md-4"
                                >
                                    Repo
                                </a>
                                {item.liveLink && (
                                    <a
                                        href={item.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-dark rounded-sm col-sm-6 col-md-4"
                                    >
                                        Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

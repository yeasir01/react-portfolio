import React from "react";

export default function About() {
    return (
        <>
            <div id="about" className="anchor"></div>
            <div className="min-vh-100 my-5">
                <div className="container">
                    <div className="row min-vh-100">
                        <div className="col-lg-3 col-md-4 col-sm-12 my-auto p-0">
                            <div className="container about-cir mb-small">
                                <h2>about.</h2>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-8 col-sm-12 my-auto text-center text-md-left text-lg-left border-left pl-4">
                            <p>
                                Greetings, I'm Yeasir, a seasoned
                                enthusiast with an enduring passion for
                                technology. From my early days of dismantling
                                and reconstructing gadgets, I cultivated a
                                profound understanding of technology,
                                architecture, and engineering. Progressing from
                                hardware intricacies to adeptly building and
                                customizing computers, I seamlessly integrated
                                technology into my professional life. Now, as a
                                dedicated full-stack web developer, I'm on a
                                deliberate journey to master coding for the
                                creation of customized software solutions. This
                                formal foray into coding is more than a skill
                                acquisition—it's a strategic move to leverage
                                technology for innovation and growth. Join me on
                                this transformative odyssey as we pioneer the
                                future through the language of code.
                            </p>
                            <a
                                aria-label="Github"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/yeasir01"
                            >
                                <i className="fab fa-github so-icon"></i>
                            </a>
                            <a
                                aria-label="Linkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/yeasirhugais/"
                            >
                                <i className="fab fa-linkedin so-icon"></i>
                            </a>
                            <a
                                aria-label="Stack Overflow"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://stackoverflow.com/users/12330004/yeasir01"
                            >
                                <i className="fab fa-stack-overflow so-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

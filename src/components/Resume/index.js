import React from "react";

function Resume() {
    return (
        <div>
            <section className="container">
                <h3 className="section-title">Resume</h3>
                

                <div className="d-flex">
                    <div>
                        <h4 className="resume-header">Front-end Experience</h4>
                            <ul className="resume-items">
                                <li className="resume-item">HTML</li>
                                <li className="resume-item">CSS</li>
                                <li className="resume-item">SCSS</li>
                                <li className="resume-item">JavaScript</li>
                                <li className="resume-item">JQuery</li>
                                <li className="resume-item">React</li>
                                <li className="resume-item">Handlebars</li>
                            </ul>
                    </div>
                    <div>
                        <h4 className="resume-header">Back-end Experience</h4>
                            <ul className="resume-items">
                                <li className="resume-item">Node.js</li>
                                <li className="resume-item">Express.js</li>
                                <li className="resume-item">SQL</li>
                                <li className="resume-item">Mongoose</li>
                                <li className="resume-item">Apollo</li>
                            </ul>
                    </div>
                </div>

                <div className="resume-bottom">
                    <h4 className="resume-header">Deployment experience</h4>
                    <ul className="resume-items">
                        <li className="resume-item">Github</li>
                        <li className="resume-item">Heroku</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Resume
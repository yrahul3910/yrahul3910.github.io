import React from "react";

export default class NewBanner extends React.Component {
    render() {
        return (
            <div className="split-box" id="top">
                <div className="nav" id="background-picture">
                    
                </div>
                <div className="nav">
                    <div className="profile-details">
                        <h1>RAHUL YEDIDA</h1>
                        <h2>Ph.D. Student</h2>
                        <h2>Department of Computer Science</h2>
                        <h2 style={{ marginBottom: "10vh" }}>
                            <a href="https://csc.ncsu.edu">
                                NC State University
                            </a>
                        </h2>
                        <h1>About Me</h1>
                        <ul>
                            <li><b>Born:</b> October 27, 1997</li>
                            <li><b>Experience:</b> Machine learning, web development, .NET</li>
                            <li><b>Hobbies:</b> Programming, chess, reading</li>
                            <li><b>Interests:</b> Sociology, math, behavioral neuroscience</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
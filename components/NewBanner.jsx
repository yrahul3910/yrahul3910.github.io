import React from "react";

export default class NewBanner extends React.Component {
    render() {
        return (
            <div className="split-box" id="top">
                <div className="nav">
                    <div className="profile-wrapper">
                        <img src="https://i.imgur.com/H8OmujV.png" />
                    </div>
                    <div className="profile-details">
                        <h1>RAHUL YEDIDA</h1>
                        <h2>Ph.D. Student</h2>
                        <h2>
                            <a href="https://ncsu.edu">
                                NC State University
                        </a>
                        </h2>
                        <br /><h2>Raleigh, USA</h2>
                    </div>
                </div>
                <div className="nav">
                    <div className="profile-details">
                        <h1>About Me</h1>
                        <ul>
                            <li><b>Born:</b> October 27, 1997</li>
                            <li><b>Experience:</b> Machine learning, web development, .NET</li>
                            <li><b>Hobbies:</b> Programming, chess, reading</li>
                            <li><b>Interests:</b> Sociology, math</li>
                        </ul>
                        <h1>Contact Me</h1>
                        <h3>ryedida@ncsu.edu</h3>
                    </div>
                </div>
            </div>
        );
    }
}
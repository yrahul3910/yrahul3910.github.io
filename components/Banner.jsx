import React from "react";

export default class Banner extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="profile-wrapper">
                    <img src="https://i.imgur.com/H8OmujV.png" />
                </div>
                <div className="profile-details">
                    <h1>RAHUL YEDIDA</h1>
                    <h2>Undergraduate Student</h2>
                    <h2>
                        <a href="https://pesitsouth.pes.edu">
                            PES University, Electronic City
                        </a>
                    </h2>
                    <br/><h2><em>(formerly PES Institute of Technology, South Campus)</em></h2>
                </div>
                <ul className="nav-menu-sticky">
                    <li>Research</li>
                    <li>Projects</li>
                    <li><a href="https://1drv.ms/b/s!AiFT_8UzfVHdskGZUeaqLNACzkcR">CV</a></li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}
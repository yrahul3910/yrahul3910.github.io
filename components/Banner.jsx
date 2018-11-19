import React from "react";

export default class Banner extends React.Component {
    constructor() {
        super();
        this.scroll = this.scroll.bind(this);
    }

    scroll() {
        let el = document.getElementById("hello");
        el.scrollIntoView({block: "start", behavior: "smooth"});
    }

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
                <p className="arrow"><i className="down-arrow" onClick={this.scroll}></i></p>
            </div>
        );
    }
}
import React from "react";
import {Link} from "react-router-dom";

export default class Tldr extends React.Component {
    render() {
        return (
            <div style={{margin: "50px"}}>
                <center>
                    <h1>The TL;DR (Too Long; Didn't Read) Version:</h1>
                </center>
                <p>
                    My name is <b>Rahul Yedida</b>. I'm a Ph.D. student at <b>NC State University</b>. I am broadly interested in machine learning and data science, but my research interests also include computational science and affective computing. My research work includes astronomical image restoration using convolutional neural networks, computing adaptive learning rates in neural networks, and on identifying prolific authors in a scientometric dataset.
                </p>
                <p>
                    My technical experience extends to web and desktop development, and machine learning/deep learning. I've worked with the MERN stack (both MongoDB and MySQL), VB.NET, ASP.NET Core 2, and Flask. I also started <a href="https://beginningwithml.wordpress.com">a blog to teach machine learning to beginners</a>.
                </p>
                <p>You can email me at ryedida@ncsu.edu</p>
                <p><Link to="/whyrahul" style={{textDecoration: "underline"}}>Back to main page</Link></p>
            </div>
        );
    }
}
import React from "react";

import NewBanner from "./NewBanner.jsx";
import StickyNav from "./StickyNav.jsx";
import CardGrid from "./CardGrid.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import SkillSet from "./SkillSet.jsx";

import researchInterests from "../src/research_interests";
import contacts from "../src/contacts.jsx";
import projects from "../src/projects.jsx";
import skills from "../src/skills.jsx";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.onscroll = () => {
            let el = document.getElementById("scroll-button");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                el.classList.add("visible");
            }
            else {
                el.classList.remove("visible");
            }
        };
    }

    render() {
        return (
            <div>
                <ScrollToTop />
                <NewBanner />
                <StickyNav />
                <main>
                    <div className="split-box">
                        <div className="nav">
                            <i className="fas fa-download" style={{ color: "rgb(125, 140, 31)", fontSize: 52 }}></i>
                            <div className="profile-details">
                                <p style={{ color: "rgb(125, 140, 31)", fontSize: 40, fontWeight: "500" }}>20,715</p>
                                <h2 style={{ color: "rgb(125, 150, 31)", margin: "0 50px" }}>The number of downloads of Xtreme Calculations as on April 19, 2019.</h2>
                            </div>

                            <i className="fas fa-quote-left" style={{ color: "rgb(125, 140, 31)", fontSize: 52, marginBottom: "30px" }}></i>
                            <div className="profile-details">
                                <h2 style={{ color: "rgb(125, 150, 31)", margin: "0 50px" }}>[...] Xtreme Calculations is quite a complete suite that is able to provide a lot of functions in an attractive package.</h2>
                                <h2 style={{ alignSelf: "flex-end", margin: "0 50px" }}>Softpedia</h2>
                            </div>
                        </div>
                        <div className="nav">
                            <div className="profile-details">
                                <h1 style={{ fontSize: 40, fontWeight: "500" }}>AIR 27</h1>
                                <h2 style={{ margin: "0 50px" }}>All India Rank in the National Creativity Aptitude Test (NCAT) 2017, a nation-wide aptitude test with 198 participating institutions.</h2>
                                <h1 style={{ fontSize: 40, fontWeight: "500" }}>66%ile</h1>
                                <h2 style={{ margin: "0 50px" }}>In the GRE Mathematics Subject Test, October 27, 2018, with a score 730/990</h2>
                            </div>
                        </div>
                    </div>
                    <section id="research" className="blue-background">
                        <h1>Research Interests</h1>
                        <p>
                            I majored in Computer Science out of my zeal for the field. My research work can be found on <a style={{ color: "white" }} href="https://www.researchgate.net/profile/Rahul_Yedida2">my ResearchGate profile</a>. Below are the fields that I would love to pursue research in, in no particular order.
                        </p>
                        <CardGrid cards={researchInterests} />
                    </section>
                    <section id="projects" className="green-background">
                        <h1>Projects</h1>
                        <p>
                            I consider myself fluent in the MERN stack, Python/Flask, and to some extent, C# and VB.NET. I work well in Agile teams with people who can pick up work independently and discuss any trouble they have with their share of the work.
                        </p>
                        <p>
                            Below is a sample of my projects. For a more comprehensive list of my notable projects, please view my CV.
                        </p>
                        <CardGrid cards={projects} />

                        <div id="skills-section">
                            <h1>Skills</h1>
                            <SkillSet skills={skills} />
                        </div>
                    </section>
                    <section id="contact" className="red-background">
                        <h1>Contact</h1>
                        <p>
                            Please contact me by clicking on any of the following links.
                        </p>
                        <CardGrid active={true} cards={contacts} />
                    </section>
                </main>
            </div>
        );
    }
}
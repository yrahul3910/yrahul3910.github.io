import React from "react";

import Banner from "./Banner.jsx";
import StickyNav from "./StickyNav.jsx";
import CardGrid from "./CardGrid.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

import researchInterests from "../src/research_interests";
import contacts from "../src/contacts.jsx";
import projects from "../src/projects.jsx";

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
                <Banner />
                <StickyNav />
                <main>
                    <section id="hello">
                        <h1>Hello!</h1>
                        <p>
                            I am Rahul Yedida, and I was born on October 27, 1997; alas, my surname initial is Y, which has led to a lot of "Why, Rahul?" jokes (hence the URL). I was born in Raipur, India. I grew up in Mississauga, Canada, and moved to Bangalore, India in 2006 to continue my middle schooling.
                        </p>
                        <p>
                            I love learning about how the world works, especially from a sociological perspective. Peter Berger's "Invitation to Sociology" and Emile Durkheim's "Suicide" have been revealing indeed. I also enjoy development, and right from high school, I have worked on developing desktop software and web applications. It is liberating to not need to rely on WYSIWYG editors and the like, and to be able to fully define what and how you want things to work, and to be able to write software to suit your own needs. Finally, I enjoy studying applied math and the working behind algorithms, as my peers will tell you with a sigh.
                        </p>
                    </section> 
                    <section id="research" className="blue-background">
                        <h1>Research Interests</h1>
                        <p>
                            I majored in Computer Science out of my zeal for the field. This zeal has led me to explore several areas, some of which I took a strong interest in, and others not so much. My research work can be found on my ResearchGate profile (link at bottom of the page). Below are the fields that I would love to pursue research in, in no particular order.
                        </p>
                        <CardGrid cards={researchInterests} />
                    </section>
                    <section id="projects" className="green-background">
                        <h1>Projects</h1>
                        <p>
                            I consider myself fluent in the MERN stack, Python/Flask, and to some extent, C# and VB.NET. I work well in Agile teams with people who can pick up work independently and discuss any trouble they have with their share of the work.
                        </p>
                        <p>
                            Below is a sample of my projects. For a more comprehensive list of my notable projects, please view my CV. My <a href="https://www.github.com/yrahul3910">GitHub profile</a> unfortunately has a few projects that I keep telling myself that I will get back to!
                        </p>
                        <CardGrid cards={projects} />
                    </section>
                    <section id="contact" className="grey-background">
                        <h1>Contact</h1>
                        <p>
                            Please contact me by clicking on any of the following links.
                        </p>
                        <CardGrid cards={contacts} />
                    </section>               
                </main>
            </div>
        );
    }
}
import React from "react";
import moment from "moment";

import Banner from "./Banner.jsx";
import StickyNav from "./StickyNav.jsx";
import CardGrid from "./CardGrid.jsx";
import researchInterests from "../src/research_interests";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Banner />
                <StickyNav />
                <main>
                    <section id="hello">
                        <h1>Hello!</h1>
                        <p>
                            I am Rahul Yedida, and I was born on October 27, 1997; alas, my surname initial is Y, which has led to a lot of "Why, Rahul?" jokes (hence the URL). I was born in Raipur, India. I grew up in Mississauga, Canada, and moved to Bangalore, India in 2006 to continue my middle schooling.
                        </p>
                        <p>
                            Currently, I am a senior undergraduate student at PES University, Electronic City. This is my personal website, and any opinions presented here are my own and not those of my peers, professors, or of my institution.
                        </p>
                        <p>
                            This website is simply for informative purposes, and you may safely assume that anything here is recent, though what time range defines "recent" is subjective, so in {moment().diff([1997, 10, 27], 'years')} years, one year may also be "recent". I will, however, try to ensure that this is not the case.
                        </p>
                        <p>
                            This website section, titled "Hello!" is for introductory purposes. I am a strong advocate of privacy, and I support Mozilla's work in this frontier; indeed, it is difficult to spread awareness and fight for the citizens of the Internet. For this reason, I do not use Facebook, Messenger, or WhatsApp, but I use email (you have to draw the line somewhere).
                        </p>
                        <p>
                            I love learning about how the world works, especially from a sociological perspective. Peter Berger's "Invitation to Sociology" and Emile Durkheim's "Suicide" have been revealing indeed. I also enjoy development, and right from high school, I have worked on developing desktop software and web applications. It is liberating to not need to rely on WYSIWYG editors and the like, and to be able to fully define what and how you want things to work, and to be able to write software to suit your own needs. Finally, I enjoy studying applied math and the working behind algorithms, as my peers will tell you with a sigh.
                        </p>
                    </section> 
                    <section id="research" className="blue-background">
                        <h1>Research Interests</h1>
                        <p>
                            I majored in Computer Science out of my zeal for the field. This zeal has led me to explore several areas, some of which I took a strong interest in, and others not so much. Below are the fields that I would love to pursue research in, in no particular order.
                        </p>
                        <CardGrid cards={researchInterests} />
                        <h1>Research Work</h1>
                        <p>
                            <b>
                                <a className="research-item" href="https://www.ijsr.net/conf/RISE2017/IJSR16.pdf">
                                    Yedida et al., 2017. Employee Attrition Prediction
                                </a>
                            </b>
                            . I worked in a team to predict employee attrition using the k-Nearest Neighbors algorithm.
                        </p>
                        <p className="research-item">
                            I worked on an image restoration problem in astronomy using convolutional neural networks.
                        </p>
                        <p className="research-item">
                            Currently, I am working on an omnibus predictive model for scientometric data.
                        </p>
                    </section>                   
                </main>
            </div>
        );
    }
}
import React from "react";
import moment from "moment";

import Banner from "./Banner.jsx";
import StickyNav from "./StickyNav.jsx";
import CardGrid from "./CardGrid.jsx";
import researchInterests from "../src/research_interests";
import contacts from "../src/contacts.jsx";

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
                            Currently, I am working on identifying prolific authors from scientometric data.
                        </p>
                    </section>
                    <section id="projects">
                        <h1>Projects</h1>
                        <p>
                            Since tenth grade, I've been actively developing software for Windows and the Web. My first software was Xtreme Calculations, a math application that over several websites, garnered over 20,000 downloads. It has been a humbling experience to be held accountable for any bugs in the software. I went on to develop other small software that either I or my school required, including an electronic voting application. The above applications were largely developed using VB.NET, a language I still strongly believe is an excellent beginner language.
                        </p>
                        <p>
                            In college, I started learning web development. In particular, I learned the MERN (MongoDB, Express, React, Node.js) stack, and I think it's a wonderful way to develop websites. I later took a course on ASP.NET Core 2, which I think is extremely well-designed. I rewrote my journal application using Electron, largely because my earlier .NET application did not work on GNU/Linux. I built some other web applications, including an issue reporting system that filtered duplicates using Latent Semantic Analysis and a video sharing website.
                        </p>
                        <p>
                            I have also been tinkering with some fun side projects recently, one of which involved me time logging every activity I do for around five or six months. I used this data to analyse my most productive hours (spoiler alert: around 6 PM and 9 PM). I also started <a href="https://beginningwithml.wordpress.com" style={{textDecoration: "underline"}}>a blog to teach machine learning to beginners</a> in a way I believe that I would have found helpful when I had started, making sure it has the mathematical rigor, but also an intuitive explanation, and Python code to solidify concepts. I used Andrew Ng's CS229 course at Stanford University as the foundation because I liked its mathematical presentation.
                        </p>
                        <p>
                            I consider myself fluent in the MERN stack, Python/Flask, and to some extent, C# and VB.NET. I am happy to do full-stack work, though I have some preference for back end development (we all know it is the easier part!) I work well in Agile teams with people who can pick up work independently and discuss any trouble they have with their share of the work.
                        </p>
                        <p>
                            The above is only a small sample of my project work. For a more comprehensive list of my notable projects, please view my CV. My GitHub profile unfortunately has a few projects that I keep telling myself that I will get back to!
                        </p>
                    </section>
                    <section id="contact" className="grey-background">
                        <h1>Contact</h1>
                        <p>
                            Like I mentioned earlier, I deactivated my Facebook account, and I do not use WhatsApp. However, you can find me on the following platforms. For most purposes, I prefer being contacted by email, because I always have Thunderbird open to notify me, and I reply quickest to email.
                        </p>
                        <CardGrid cards={contacts} />
                    </section>               
                </main>
            </div>
        );
    }
}
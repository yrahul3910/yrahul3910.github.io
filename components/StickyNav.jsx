import React from "react";

export default class StickyNav extends React.Component {
    constructor() {
        super();
        this.research = this.research.bind(this);
        this.project = this.project.bind(this);
        this.contact = this.contact.bind(this);
    }

    research() {
        let el = document.getElementById("research");
        el.scrollIntoView({block: "start", behavior: "smooth"});
    }

    project() {}

    contact() {}

    render() {
        return <ul className="nav-menu-sticky">
            <li onClick={this.research}>Research</li>
            <li onClick={this.project}>Projects</li>
            <li><a href="https://1drv.ms/b/s!AiFT_8UzfVHdskGZUeaqLNACzkcR">CV</a></li>
            <li onClick={this.contact}>Contact</li>
        </ul>
    }
}
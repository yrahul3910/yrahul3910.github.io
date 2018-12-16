import React from "react";

export default class ScrollToTop extends React.Component {
    constructor() {
        super();
        this.click = this.click.bind(this);
    }

    click() {
        let el = document.getElementsByClassName("nav")[0];
        el.scrollIntoView({block: "start", behavior: "smooth"});
    }

    render() {
        return (
            <a href="#" id="scroll-button" onClick={this.click}>
                <i style={{color: "white"}} className="fas fa-arrow-up"></i>
            </a>
        );
    }
}
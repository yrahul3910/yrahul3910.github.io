import React from "react";
import { Link } from "react-router-dom";

export default class NotFound extends React.Component {
    render() {
        return (
            <main>
                <h1>404 Not Found!</h1>
                <h1>
                    <Link style={{textDecoration: "underline", color: "blue"}} to="/whyrahul">
                        WHY, RAHUL??
                    </Link>
                </h1>
                <h2 style={{textAlign: "center"}}>Or, try the <em><Link style={{textDecoration: "underline", color: "blue"}} to="/whyrahul/tldr">Old Fashioned</Link></em> version.</h2>
            </main>
        );
    }
}
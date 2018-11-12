import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner.jsx";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Banner />
    }
}
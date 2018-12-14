import React from "react";
import PropTypes from "prop-types";

export default class Card extends React.Component {
    render() {
        return <div className="card">
            <h2 className="card-title">{this.props.title}</h2>
            <div>{this.props.info}</div>
        </div>
    }
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.any.isRequired
}
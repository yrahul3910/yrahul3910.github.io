import React from "react";
import PropTypes from "prop-types";

import Card from "./Card.jsx";

export default class CardGrid extends React.Component {
    render() {
        let cards = this.props.cards.map((data, i) => 
            <Card key={i} title={data.title} info={data.info} />
        );
        return (
            <div className="grid-parent">
                {cards}
            </div>
        );
    }
}

CardGrid.propTypes = {
    cards: PropTypes.array.isRequired
};
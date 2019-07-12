import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

class SkillSet extends React.Component {
    constructor(props) {
        super(props);

        this.state = { criterion: "type" };

        this.sortByRole = this.sortByRole.bind(this);
        this.sortByType = this.sortByType.bind(this);
    }

    sortByRole() {
        this.setState({ criterion: "role" });
    }

    sortByType() {
        this.setState({ criterion: "type" });
    }

    render() {
        let groups = _.groupBy(this.props.skills, x => x[this.state.criterion]);
        let skillsDiv = Object.keys(groups).map((objKey, i) =>
            <p key={i} style={{ textAlign: "left", paddingLeft: "0.5em" }}>
                <b>{objKey}</b>
                {groups[objKey].map((skill, j) => <span key={j} className="chip">{skill.name}</span>)}
            </p>
        );

        return (
            <div style={{ display: "flex", flexDirection: "column", backgroundColor: "white", border: "4px solid grey" }}>
                <div style={{ display: "flex", borderBottom: "4px solid gray", padding: "1em" }}>
                    <p>Sort by</p>
                    <span style={{ cursor: "pointer", margin: "1em", textDecoration: "underline" }} onClick={ this.sortByType }>Type</span>
                    <span style={{ cursor: "pointer", margin: "1em", textDecoration: "underline" }} onClick={ this.sortByRole }>Role</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ display: "none" }}>
                        Works around the first p element not being indented.
                    </p>
                    {skillsDiv}
                </div>
            </div>
        );
    }
}

SkillSet.propTypes = {
    skills: PropTypes.array.isRequired
};

export default SkillSet;
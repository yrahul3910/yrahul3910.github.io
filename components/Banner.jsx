import React from "react";

export default class Banner extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="profile-wrapper">
                    <img src="../src/profile.png" />
                </div>
                <div className="profile-details">
                    <h1>Rahul Yedida</h1>
                    <h2>Undergraduate Student</h2>
                    <h2>PES University, Electronic City</h2>
                </div>
            </div>
        );
    }
}
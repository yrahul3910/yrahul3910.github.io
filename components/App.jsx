import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./MainPage.jsx";
import Tldr from "./Tldr.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/whyrahul" render={(props) =>
                    <MainPage {...props} />
                } />
                <Route exact path="/whyrahul/tldr" render={(props) => 
                    <Tldr {...props} /> 
                } />
            </Switch>
        );
    }
}
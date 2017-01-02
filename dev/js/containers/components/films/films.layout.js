import React, {Component} from 'react';
require('../../../../scss/style.scss');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Landing from "./landing/landing";
import Details from "./details/details"


class Actors extends Component {
    render() {
        return (
            <div>
                <Landing/>
                <Details/>
            </div>
        );
    }
}

export default Actors;
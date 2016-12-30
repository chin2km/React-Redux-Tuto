import React, { Component } from 'react';
require('../../scss/style.scss');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './common/navigation';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SiteHeader from "./common/header";
import DarkFooter from "./common/footer";

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <div>
                <SiteHeader />
                {this.props.children}
                <DarkFooter />
                <NavigationBar />
            </div>
        );
    }
}

export default App;
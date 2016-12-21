import React, {Component} from 'react';
require('../../scss/style.scss');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StarWarActors from '../containers/starwar-actors'
import ActorDetails from '../containers/starwar-actor-details';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from './loader';
import DarkFooter from "./footer"


injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <div>
                <StarWarActors/>
                <ActorDetails/>
                <DarkFooter/>
            </div>
        );
    }
}

export default App;
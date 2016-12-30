import React, { Component } from 'react';
require('../../../scss/style.scss');
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
import { Link } from "react-router";

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  select(index) { this.setState({ selectedIndex: index }) };

  render() {
    return (
      <Paper zDepth={1} className='navBar'>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>

          <Link to="/actors">
            <BottomNavigationItem
              label="Actors"
              icon={nearbyIcon}
              onTouchTap={() => this.select(0)}
            />
          </Link>
          
          <Link to="/films">
            <BottomNavigationItem
              label="Films"
              icon={nearbyIcon}
              onTouchTap={() => this.select(1)}
            />
          </Link>

          <Link to="/starships">
            <BottomNavigationItem
              label="Starships"
              icon={nearbyIcon}
              onTouchTap={() => this.select(2)}
            />
          </Link>

          <Link to="/starships">
            <BottomNavigationItem
              label="Starships"
              icon={nearbyIcon}
              onTouchTap={() => this.select(2)}
            />
          </Link>

          <Link to="/starships">
            <BottomNavigationItem
              label="Starships"
              icon={nearbyIcon}
              onTouchTap={() => this.select(2)}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    );
  }
}

export default NavigationBar;
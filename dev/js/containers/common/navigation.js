import React, { Component } from 'react';
require('../../../scss/style.scss');
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';

import { Link } from "react-router";

const styleColor={
  'color':'#888'
}

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
              icon={<i className="material-icons" style={styleColor}>face</i>}
              onTouchTap={() => this.select(0)}
            />
          </Link>
          
          <Link to="/films">
            <BottomNavigationItem
              label="Films"
              icon={<i className="material-icons" style={styleColor}>movie</i>}
              onTouchTap={() => this.select(1)}
            />
          </Link>

          <Link to="/starships">
            <BottomNavigationItem
              label="Starships"
              icon={<i className="material-icons" style={styleColor}>gamepad</i>}
              onTouchTap={() => this.select(2)}
            />
          </Link>

          <Link to="/planets">
            <BottomNavigationItem
              label="Planets"
              icon={<i className="material-icons" style={styleColor}>tonality</i>}
              onTouchTap={() => this.select(2)}
            />
          </Link>

          <Link to="/vehicles">
            <BottomNavigationItem
              label="Vehicles"
              icon={<i className="material-icons" style={styleColor}>flight</i>}
              onTouchTap={() => this.select(2)}
            />
          </Link>
          <Link to="/species">
            <BottomNavigationItem
              label="Species"
              icon={<i className="material-icons" style={styleColor}>person_pin</i>}
              onTouchTap={() => this.select(2)}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    );
  }
}

export default NavigationBar;
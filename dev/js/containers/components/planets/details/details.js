import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '../../../common/loader';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import StarWarAvatar from "../../../common/components/planets-avatar";
import {closeSelected} from "./details.actions";


class Details extends Component {

    constructor(props) {
        super(props);
    }


    render() {


        return (
            <div>
                <div>
                    <Drawer docked={false} width={400} 
                        openSecondary={true} 
                        open={this.props.selector.selected} >

                        <AppBar
                            onClick={() => this.props.closeSelected(false)}
                            iconElementLeft={
                                <IconButton >
                                <NavigationClose />
                                </IconButton>
                            }
                        title="back to the dark side"
                        />

                        
                        <div className="darkBg">
                            {this.props.selector.loaded?
                                <div className="detailed">

                                    <StarWarAvatar gender={this.props.selector.activePlanet.gender} size="big"/>

                                    <h1>{this.props.selector.activePlanet.name}</h1>
                                    <h3>Climate : {this.props.selector.activePlanet.climate}</h3>
                                    <h3>Diameter: {this.props.selector.activePlanet.diameter}</h3>
                                    <h3>Gravity : {this.props.selector.activePlanet.gravity}</h3>
                                    <h3>Orbital Period : {this.props.selector.activePlanet.orbital_period}</h3>
                                    <h3>Population : {this.props.selector.activePlanet.population}</h3>
                                    <h3>Rotation period: {this.props.selector.activePlanet.rotation_period}</h3>
                                    <h3>Terrain : {this.props.selector.activePlanet.terrain}</h3>
                                </div>
                                :
                                ''
                            }
                        </div>
        
                        <CircularProgress visibility={!this.props.selector.loaded} message="" />
                        
                    </Drawer>
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        selector: state.PlanetsReducers.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeSelected:closeSelected
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);
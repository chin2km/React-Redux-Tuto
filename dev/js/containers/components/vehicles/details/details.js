import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '../../../common/loader';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import StarWarAvatar from "../../../common/components/vehicles-avatar";
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

                                    <StarWarAvatar gender={this.props.selector.activeVehicle.gender} size="big"/>

                                    <h1>{this.props.selector.activeVehicle.name}</h1>
                                    <h3>Manufacturer : {this.props.selector.activeVehicle.manufacturer}</h3>
                                    <h3>Model : {this.props.selector.activeVehicle.model}</h3>
                                    <h3>Max Atmosphering Speed : {this.props.selector.activeVehicle.max_atmosphering_speed}</h3>
                                    <h3>Length : {this.props.selector.activeVehicle.length}</h3>
                                    <h3>Crew : {this.props.selector.activeVehicle.crew}</h3>
                                    <h3>Cargo Capacity: {this.props.selector.activeVehicle.cargo_capacity}</h3>
                                    <h3>Vehicle Class: {this.props.selector.activeVehicle.vehicle_class}</h3>
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
        selector: state.VehiclesReducers.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeSelected:closeSelected
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);
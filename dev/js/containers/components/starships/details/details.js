import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '../../../common/loader';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import StarWarAvatar from "../../../common/components/starships-avatar";
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

                                    <StarWarAvatar gender={this.props.selector.activeStarship.gender} size="big"/>

                                    <h1>{this.props.selector.activeStarship.name}</h1>
                                    <h3>Crew : {this.props.selector.activeStarship.crew}</h3>
                                    <h3>Manufacture : {this.props.selector.activeStarship.manufacture}</h3>
                                    <h3>Model : {this.props.selector.activeStarship.model}</h3>
                                    <h3>Passengers : {this.props.selector.activeStarship.passengers}</h3>
                                    <h3>Consumables : {this.props.selector.activeStarship.consumables}</h3>
                                    <h3>Length : {this.props.selector.activeStarship.length}</h3>
                                    <h3>Cargo Capacity : {this.props.selector.activeStarship.cargo_capacity}</h3>
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
        selector: state.StarshipsReducers.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeSelected:closeSelected
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);
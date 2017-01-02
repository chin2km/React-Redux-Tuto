import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '../../../common/loader';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import StarWarAvatar from "../../../common/components/species-avatar";
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

                                    <StarWarAvatar gender={this.props.selector.activeSpecies.gender} size="big"/>

                                    <h1>{this.props.selector.activeSpecies.name}</h1>
                                    <h3>Classification : {this.props.selector.activeSpecies.classification}</h3>
                                    <h3>Designation : {this.props.selector.activeSpecies.designation}</h3>
                                    <h3>Average Lifespan : {this.props.selector.activeSpecies.average_lifespan}</h3>
                                    <h3>Language : {this.props.selector.activeSpecies.language}</h3>
                                    <h3>Average Height : {this.props.selector.activeSpecies.average_height}</h3>
                                    <h3>Eye colors : {this.props.selector.activeSpecies.eye_colors}</h3>
                                    <h3>Hair colors : {this.props.selector.activeSpecies.hair_colors}</h3>
                                    <h3>Skin colors : {this.props.selector.activeSpecies.skin_colors}</h3>
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
        selector: state.SpeciesReducers.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeSelected:closeSelected
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);
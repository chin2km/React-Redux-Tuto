import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '../../../common/loader';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import StarWarAvatar from "../common/actors-avatar";
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
                                <div className="actor">

                                    <StarWarAvatar gender={this.props.selector.activeActor.gender} size="big"/>

                                    <h1>{this.props.selector.activeActor.name}</h1>
                                    <h3>Gender : {this.props.selector.activeActor.gender}</h3>
                                    <h3>Birth year : {this.props.selector.activeActor.birth_year}</h3>
                                    <h3>Height : {this.props.selector.activeActor.height}</h3>
                                    <h3>Mass : {this.props.selector.activeActor.mass}</h3>
                                    <h3>Eye color : {this.props.selector.activeActor.eye_color}</h3>
                                    <h3>Hair color : {this.props.selector.activeActor.hair_color}</h3>
                                    <h3>Skin color : {this.props.selector.activeActor.skin_color}</h3>
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
        selector: state.selector
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeSelected:closeSelected
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);
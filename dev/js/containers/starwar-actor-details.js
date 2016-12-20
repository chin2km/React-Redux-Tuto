import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '../containers/loader';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import StarWarAvatar from "./starwar-actors-avatar";

import {showLoader,hideLoader,closeSelected} from "../actions/actors-actions";

class ActorDetails extends Component {

    constructor(props) {
        super(props);
        this.fakeHideLoader = this.fakeHideLoader.bind(this);
    }
    
    fakeHideLoader(){
        setTimeout(()=>{
            this.props.hideLoader();
        },1000)
    }

    render() {


        return (
            <div onLoad={this.fakeHideLoader}>
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

                        <CircularProgress />

                        <div className="darkBg">
                            {this.props.selector.selected?
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
                            </div>:''
                        }
                        </div>
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
        closeSelected:closeSelected,
        showLoader:showLoader,
        hideLoader:hideLoader
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ActorDetails);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '../../../common/loader';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import StarWarAvatar from "../../../common/components/films-avatar";
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

                                    <StarWarAvatar gender={this.props.selector.activeFilm.gender} size="big"/>

                                    <h1>{this.props.selector.activeFilm.title}</h1>
                                    <h3>Episode : {this.props.selector.activeFilm.episode_id}</h3>
                                    <h3>Created : {this.props.selector.activeFilm.created}</h3>
                                    <h3>Director : {this.props.selector.activeFilm.director}</h3>
                                    <h3>Producer : {this.props.selector.activeFilm.producer}</h3>
                                    <h3>Release Date : {this.props.selector.activeFilm.release_date}</h3>
                                    <h3>opening_crawl:<i>{this.props.selector.activeFilm.opening_crawl}</i> </h3>
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
        selector: state.FilmsReducers.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeSelected:closeSelected
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);
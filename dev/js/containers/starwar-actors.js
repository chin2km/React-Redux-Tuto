import React, { Component } from 'react';
require('../../scss/style.scss');
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from '../containers/loader';
import StarWarAvatar from "./starwar-actors-avatar";
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {fetchActors,showLoader,hideLoader,selectActor} from "../actions/actors-actions";

class StarWarActors extends Component {
    constructor() {
        super();
        this.reloadActors = this.reloadActors.bind(this);
    }
    
    componentWillMount() {
        this.reloadActors();
    }
    

    reloadActors(){
        this.props.showLoader();
        this.props.fetchActors()
    }

    createItems() {
        if (this.props.fetcher.fetching === true) {
            return (<CircularProgress />)
        }
        else if (this.props.fetcher.fetched === true) {
            return (
                <div>

                    <div>
                        <List>

                                {this.props.fetcher.actors.map(actor =>
                                    <ListItem className="list-item"
                                        onClick={() => this.props.selectActor(actor)}
                                        key={actor.name}
                                        primaryText={actor.name}
                                        leftAvatar={<div><StarWarAvatar gender={actor.gender} size="small"/></div>}
                                        rightIcon={<MoreVertIcon />}
                                        />
                                )
                            }
                        </List>

                    </div>
                </div>

            );
        }
        else if (this.props.fetcher.error) {
            return (<h2>Error</h2>)

        }



    }

    render() {
        return (
            <div>
                <h1 className="site-title" >
                    The Dark Side - ¯\_(ツ)_/¯
                    <IconButton
                        className="home-btn"
                        onClick={this.reloadActors}
                        >
                        <ActionHome />
                    </IconButton>
                </h1>
                {this.createItems()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fetcher: state.fetcher
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            fetchActors:fetchActors,
            selectActor: selectActor,
            showLoader:showLoader,
            hideLoader:hideLoader
        }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StarWarActors);
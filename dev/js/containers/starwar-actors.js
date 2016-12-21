import React, { Component } from 'react';
require('../../scss/style.scss');
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from '../components/loader';
import StarWarAvatar from "./starwar-actors-avatar";
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { fetchActors, fetchActorById } from "../actions/actors-actions";


class StarWarActors extends Component {
    constructor() {
        super();
        this.loadActors = this.loadActors.bind(this);
    }

    componentWillMount() {
        this.loadActors();
    }


    loadActors() {
        this.props.fetchActors()
    }

    createItems() {
        if (this.props.fetcher.fetched === true) {
            return (

                <List>

                    {this.props.fetcher.actors.map(actor =>
                        <ListItem className="list-item"
                            onClick={() => this.props.fetchActorById(actor)}
                            key={actor.name}
                            primaryText={actor.name}
                            leftAvatar={<div><StarWarAvatar gender={actor.gender} size="small" /></div>}
                            rightIcon={<MoreVertIcon />}
                            />
                    )
                    }
                </List>


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
                        onClick={this.loadActors}
                        >
                        <ActionHome />
                    </IconButton>
                </h1>
                <CircularProgress visibility={this.props.fetcher.fetched!==true} message={"May the force be with you..."}/>
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
        fetchActors: fetchActors,
        fetchActorById: fetchActorById
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StarWarActors);
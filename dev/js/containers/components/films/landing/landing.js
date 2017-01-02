import React, { Component } from 'react';
require('../../../../../scss/style.scss');
import { List, ListItem } from 'material-ui/List';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from '../../../common/loader';
import StarWarAvatar from "../../../common/components/films-avatar";
import {fetchDataByPage} from "./landing.actions";
import {fetchDataById} from "../details/details.actions";


class Landing extends Component {
    constructor() {
        super();
        this.fetchDataByPage = this.fetchDataByPage.bind(this);
        this.state={
            activePage:1
        }
    }

    componentWillMount() {
        this.fetchDataByPage(this.state.activePage);
    }
    

    fetchDataByPage(page){
        this.setState({
            activePage:page
        });
        this.props.fetchDataByPage(page)
    }


    createItems() {
        if (this.props.fetcher.fetched === true) {
            return (

                <List>

                    {this.props.fetcher.films.map(film =>
                        <ListItem className="list-item"
                            onClick={() => this.props.fetchDataById(film)}
                            key={film.title}
                            primaryText={film.title}
                            leftAvatar={<div><StarWarAvatar gender={film.gender} size="small" /></div>}
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

    createPagination() {
        if (this.props.fetcher.fetched === true) {
            let buttons = [];
            for (let i = 1; i <= this.props.fetcher.pages; i++) {
                buttons.push(
                    <FloatingActionButton key={i}  mini={true} className="pageNo" onClick={() => this.fetchDataByPage(i)} >
                    {i} 
                    </FloatingActionButton>
                )
            }
            return (
                <div className="floatingButton">
                    {this.state.activePage}
                    {buttons}
                    <span className='pageTip'>page</span>
                </div>
            );
        }
    }


    render() {
        return (
            <div>
                <CircularProgress visibility={this.props.fetcher.fetched!==true} message={"May the force be with you..."}/>
                {this.createItems()}
                {this.createPagination()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fetcher: state.FilmsReducers.landing
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchDataById: fetchDataById,
        fetchDataByPage: fetchDataByPage,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
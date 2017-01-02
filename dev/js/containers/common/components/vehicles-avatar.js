import React, { Component } from 'react';
require('../../../../scss/style.scss');


class StarWarAvatar extends Component {

    render() {

        switch (this.props.gender) {
            default:
                return <img className={"avatar " + this.props.size} src="http://piratevinyldecals.com/wps/wp-content/uploads/2014/04/Star-Wars-X-Wing-PV376.png" />  
                break;
        }
    }
}


export default StarWarAvatar;
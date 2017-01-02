import React, { Component } from 'react';
require('../../../../scss/style.scss');


class StarWarAvatar extends Component {

    render() {

        switch (this.props.gender) {
            default:
                return <img className={"avatar " + this.props.size} src="http://raddezigns.com/decal_pics/10484_Black.jpg" />  
                break;
        }
    }
}


export default StarWarAvatar;
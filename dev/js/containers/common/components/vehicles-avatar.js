import React, { Component } from 'react';
require('../../../../scss/style.scss');


class StarWarAvatar extends Component {

    render() {

        switch (this.props.gender) {
            default:
                return <img className={"avatar " + this.props.size} src="https://www.clipartmax.com/png/middle/134-1345263_the-grand-imperial-military-sith-logo-star-wars.png" />  
                break;
        }
    }
}


export default StarWarAvatar;
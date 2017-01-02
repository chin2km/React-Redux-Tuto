import React, { Component } from 'react';
require('../../../../scss/style.scss');


class StarWarAvatar extends Component {

    render() {

        switch (this.props.gender) {
            default:
                return <img className={"avatar " + this.props.size} src="https://d30y9cdsu7xlg0.cloudfront.net/png/67850-200.png" />  
                break;
        }
    }
}


export default StarWarAvatar;
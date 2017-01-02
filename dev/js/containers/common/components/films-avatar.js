import React, { Component } from 'react';
require('../../../../scss/style.scss');


class StarWarAvatar extends Component {

    render() {

        switch (this.props.gender) {
            default:
                return <img className={"avatar " + this.props.size} src="http://www.clipartkid.com/images/662/star-wars-logotipos-logos-gratuitos-clipartlogo-com-70pttz-clipart.png" />  
                break;
        }
    }
}


export default StarWarAvatar;
import React, { Component } from 'react';
require('../../../../scss/style.scss');


class StarWarAvatar extends Component {

    render() {

        switch (this.props.gender) {
            default:
                return <img className={"avatar " + this.props.size} src="http://www.clipartkid.com/images/185/star-wars-vector-yoda-vector-yoda-shape-star-wars-shape-yoda-png-star-bQSODo-clipart.png" />  
                break;
        }
    }
}


export default StarWarAvatar;
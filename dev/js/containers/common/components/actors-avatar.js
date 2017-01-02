import React, { Component } from 'react';
require('../../../../scss/style.scss');


class StarWarAvatar extends Component {

    render() {

        switch (this.props.gender) {
            case "male":
                return <img className={"avatar " + this.props.size} src="http://icons.iconarchive.com/icons/sensibleworld/starwars/1024/Darth-Vader-icon.png" />;
                break;
            case "female":
                return <img className={"avatar " + this.props.size} src="http://icon-icons.com/icons2/318/PNG/512/Leia-icon_34495.png" />
                break;
            default:
                return <img className={"avatar " + this.props.size} src="http://icons.iconarchive.com/icons/sensibleworld/starwars/1024/R2D2-icon.png" />  
                break;
        }
    }
}


export default StarWarAvatar;
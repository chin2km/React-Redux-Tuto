import React, { Component } from 'react';
require('../../../../scss/style.scss');

class StarWarAvatar extends Component {
  render() {
    switch (this.props.gender) {
      case 'male':
        return (
          <img
            className={'avatar ' + this.props.size}
            src="http://icons.iconarchive.com/icons/sensibleworld/starwars/1024/Darth-Vader-icon.png"
          />
        );
        break;
      case 'female':
        return (
          <img
            className={'avatar ' + this.props.size}
            src="https://www.clipartmax.com/png/full/120-1206682_princess-leia-carrie-fisher-collection-free-star-wars-printables.png"
          />
        );
        break;
      default:
        return (
          <img
            className={'avatar ' + this.props.size}
            src="http://icons.iconarchive.com/icons/sensibleworld/starwars/1024/R2D2-icon.png"
          />
        );
        break;
    }
  }
}

export default StarWarAvatar;

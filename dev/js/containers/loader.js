import React from 'react';
require('../../scss/style.scss');
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

class LoaderCircle extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    if (this.props.loader.visibility) {
      return(<div className="loader-bg">
              <CircularProgress size={75} thickness={8} />
            </div>);
    } else {
      return <span></span>
    }

  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        loader: state.loader
    }
}

export default connect(mapStateToProps)(LoaderCircle);
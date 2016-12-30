import React, {Component} from 'react';
require ("../../../scss/style.scss")

class DarkFooter extends Component {
    render() {
        return (
            <div className="my-footer">
                <a className="logo" target="_blank" href="https://github.com/chin2km/React-Redux-Tuto">
                    <div className="tooltip">
                        Get the code
                    </div>
                </a>
            </div>
        );
    }
}

export default DarkFooter;
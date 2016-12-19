import React, {Component} from 'react';
require ("../../../dev/scss/style.scss")

class DarkFooter extends Component {
    render() {
        return (
            <div className="my-footer">
                <a className="logo" target="_blank" href="http://www.chin2km.com">
                    <div className="tooltip">
                        Goto my Home Page
                    </div>
                </a>
            </div>
        );
    }
}

export default DarkFooter;
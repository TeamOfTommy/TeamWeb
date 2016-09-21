import React from 'react';

import '../../../css/home/home.css';

export default class HomeLayout extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

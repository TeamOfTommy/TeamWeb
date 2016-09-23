import React from 'react';

import {Link} from 'react-router'

import '../../../css/home/home.css';

export default class HomeLayout extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="home-layout">
                {this.props.children}
            </div>
        )
    }
}

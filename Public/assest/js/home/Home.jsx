import React from 'react';

import FirstBlock from './FirstBlock.jsx'

import '../../../css/home/home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <FirstBlock className="show-block"/>
            </div>
        )
    }
}

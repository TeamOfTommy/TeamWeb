import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import FirstBlock from './FirstBlock.jsx';
import HomeLayout from './HomeLayout.jsx';

import '../../../css/home/home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <Route path="/" component={HomeLayout}>
                    <IndexRoute component={FirstBlock}/>
                </Route>
            </Router>
        )
    }
}

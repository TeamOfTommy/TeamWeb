import React from 'react';
import {Router, Route, Redirect, IndexRoute, browserHistory} from 'react-router';

import {pathConfig} from '../config.js';

import FirstBlock from './FirstBlock.jsx';
import HomeLayout from './HomeLayout.jsx';
import SecondBlock from './SecondBlock.jsx';
import ThirdBlock from './ThirdBlock.jsx';

import '../../../css/home/home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={pathConfig.rootPath} component={HomeLayout}>
                    <IndexRoute component={FirstBlock}/>
                    <Route path="/second" component={SecondBlock}/>
                    <Redirect from="second" to="/second"/>
                    <Route path="/third" component={ThirdBlock}/>
                    <Redirect from="third" to="/third"/>
                </Route>
            </Router>
        )
    }
}

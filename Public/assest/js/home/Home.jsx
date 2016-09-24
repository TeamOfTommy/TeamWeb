import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

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
                <Route path="/" component={HomeLayout}>
                    <IndexRoute component={FirstBlock}/>
                    <Route path="second" component={SecondBlock}/>
                    <Route path="third" component={ThirdBlock}/>
                </Route>
            </Router>
        )
    }
}

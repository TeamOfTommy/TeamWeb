import React from 'react';
import {browserHistory} from 'react-router';

import '../../../css/home/firstBlock.css';

export default class FirstBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false
        }
        this.goNextPage = this.goNextPage.bind(this);
    }
    goNextPage() {
        this.setState({hide: true});
        setTimeout(() => {
            browserHistory.push('second');
        }, 1190);
    }
    render() {
        const screenHeight = document.body.clientHeight;
        const screenWidth = document.body.clientWidth;

        return (
            <div className={this.state.hide
                ? "first-block show-block hide-back"
                : "first-block show-block"} style={{
                height: screenHeight + 'px'
            }}>
                <div className="name" style={{
                    height: (screenHeight * 0.33 + 'px'),
                    width: (screenHeight * 0.33 + 'px'),
                    left: ((screenWidth - screenHeight * 0.33) / 2 + 'px')
                }}>
                    <p>hello!</p>
                    <p>we are</p>
                    <p>dream team</p>
                </div>
                <div className="name-circle" style={{
                    height: (screenHeight * 0.4 + 'px'),
                    width: (screenHeight * 0.4 + 'px'),
                    left: ((screenWidth - screenHeight * 0.4) / 2 + 3 + 'px'),
                    top: (screenHeight * 0.27 + 'px')
                }}></div>
                <a href="javascript:void(0)" className="next-block" onClick={this.goNextPage}>
                    Dream团队
                    <img src={require("../../image/icon_next_arrow.png")}/>
                </a>
            </div>
        )
    }
}

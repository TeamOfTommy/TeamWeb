import React from 'react';
import {browserHistory} from 'react-router';

import '../../../css/home/secondBlock.css';

export default class SecondBlock extends React.Component {
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
            browserHistory.push('third');
        }, 800);
    }
    render() {
        const screenHeight = document.body.clientHeight;
        const screenWidth = document.body.clientWidth;

        return (
            <div className={this.state.hide
                ? "second-block show-block hide-down"
                : "second-block show-block"} style={{
                height: screenHeight + 'px'
            }}>
                <div className="intro">
                    <p className="title">DreamTeam是一只专业的网站制作团队</p>
                    <p>大型，中型，小型网站</p>
                    <p>微信服务号</p>
                    <p>PC端，移动端</p>
                    <p>等等..</p>
                    <p>无所不能</p>
                </div>
                <a href="javascript:void(0)" className="next-block" onClick={this.goNextPage}>
                    <img src={require("../../image/icon_down_arrow_black.png")}/>
                </a>
            </div>
        )
    }
}

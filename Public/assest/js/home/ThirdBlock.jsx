import React from 'react';

import '../../../css/home/thirdBlock.css';

export default class ThirdBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false
        }
    }
    componentDidMount() {
        let _self = this;
        setTimeout(() => {
            _self.setState({showAnswer: true});
        }, 1200);
    }
    render() {
        const screenHeight = document.body.clientHeight;
        const screenWidth = document.body.clientWidth;

        return (
            <div className="third-block show-block" style={{
                height: screenHeight + 'px'
            }}>
                <p className="title">为什么选择我们？</p>
                <div className="left-mask"></div>
                {this.state.showAnswer
                    ? <div>
                            <div className="reason rigorous">
                                <img className="icon" src={require("../../image/rigorous.png")}/>
                                <p className="answer">严谨</p>
                            </div>
                            <div className="reason efficiency">
                                <img className="icon" src={require("../../image/efficiency.png")}/>
                                <p className="answer">高效</p>
                            </div>
                            <div className="reason safety">
                                <img className="icon" src={require("../../image/safe.png")}/>
                                <p className="answer">安全</p>
                            </div>
                        </div>
                    : false}
            </div>
        )
    }
}

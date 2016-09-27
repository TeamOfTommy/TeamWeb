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
                                <p className="detail">我们来自国际知名软件企业，外企严谨的工作态度亦是我们为人处事的态度。</p>
                            </div>
                            <div className="reason efficiency">
                                <img className="icon" src={require("../../image/efficiency.png")}/>
                                <p className="answer">高效</p>
                                <p className="detail">团队成员习惯于敏捷开发的工作制度，快速高质量的完成迭代任务是我们的基本素质。</p>
                            </div>
                            <div className="reason safety">
                                <img className="icon" src={require("../../image/safe.png")}/>
                                <p className="answer">安全</p>
                                <p className="detail">日积月累的项目经验使得我们更加懂得产品安全防护与用户私密的重要性，安全保证不仅使得用户放心，更使我们节省精力。</p>
                            </div>
                        </div>
                    : false}
            </div>
        )
    }
}

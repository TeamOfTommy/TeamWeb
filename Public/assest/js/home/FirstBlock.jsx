import React from 'react';

import '../../../css/home/firstBlock.css';

export default class FirstBlock extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const screenHeight = document.body.clientHeight;
        const screenWidth = document.body.clientWidth;
        let namePStyle = {
            // height: (screenHeight * 0.06534 + 'px'),
            // lineHeight: (screenHeight * 0.06534 + 'px')
        }
        return (
            <div className={"first-block " + this.props.className} style={{
                height: screenHeight + 'px'
            }}>
                <div className="name" style={{
                    height: (screenHeight * 0.33 + 'px'),
                    width: (screenHeight * 0.33 + 'px'),
                    left: ((screenWidth - screenHeight * 0.33) / 2 + 'px')
                }}>
                    <p style={namePStyle}>hello!</p>
                    <p style={namePStyle}>we are</p>
                    <p style={namePStyle}>dream team</p>
                </div>
                <div className="name-circle" style={{
                    height: (screenHeight * 0.4 + 'px'),
                    width: (screenHeight * 0.4 + 'px'),
                    left: ((screenWidth - screenHeight * 0.4) / 2 + 3 + 'px'),
                    top: (screenHeight * 0.27 + 'px')
                }}></div>
                <a href="javascript:void(0)" className="next-block">看看Dream团队<img src={require("../../image/icon_next_arrow.png")}/></a>
            </div>
        )
    }
}

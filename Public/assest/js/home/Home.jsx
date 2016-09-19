import React from 'react';

import '../../../css/home/home.css';

export default class Home extends React.Component {
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
            <div>
                <div className="first-block show-block" style={{
                    height: screenHeight + 'px'
                }}>
                    <div className="name" style={{
                        height: (screenHeight * 0.33 + 'px'),
                        width: (screenHeight * 0.33 + 'px'),
                        top: (screenHeight * 0.33 + 'px'),
                        left: ((screenWidth - screenHeight * 0.33) / 2 + 'px')
                    }}>
                        <p style={namePStyle}>hello!</p>
                        <p style={namePStyle}>we are</p>
                        <p style={namePStyle}>dream team</p>
                    </div>
                </div>
            </div>
        )
    }
}

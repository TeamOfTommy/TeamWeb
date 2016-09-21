import React from 'react';

import '../../../css/home/secondBlock.css';

export default class SecondBlock extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const screenHeight = document.body.clientHeight;
        const screenWidth = document.body.clientWidth;

        return (
            <div className="second-block show-block" style={{
                height: screenHeight + 'px'
            }}></div>
        )
    }
}

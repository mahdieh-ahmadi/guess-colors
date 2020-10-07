import React from 'react'

import './circle.css'

const Circle = props => {
    return <div className = 'circle' style={{'backgroundColor' : `${props.bgColor}`}}>

    </div>
}

export default Circle
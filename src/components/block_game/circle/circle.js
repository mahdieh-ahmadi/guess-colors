import React from 'react'

import './circle.css'

const Circle = props => {
    return <div 
    className = 'circle' 
    key = {props.key}
    style={{'backgroundColor' : `${props.bgColor}`}}
    onClick = {props.clicked}>

    </div>
}

export default Circle
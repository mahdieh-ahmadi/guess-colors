import React from 'react'

import './circle.css'

const Circle = props => {
    let styles = props.style ? {'backgroundColor' : `${props.bgColor}` , 
    'border' : '2px solid black'} : {'backgroundColor' : `${props.bgColor}`}
    return <div 
    className = 'circle' 
    key = {props.keyword}
    style={styles}
    onClick = {props.clicked}>

    </div>
}

export default Circle
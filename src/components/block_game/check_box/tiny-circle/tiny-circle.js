import React from 'react'

import './tiny-circle.css'

const Tiny_circle = props => {
    return <div 
    style={{'backgroundColor' : `${props.bgcolor}`}} 
    className='tiny_circle'
    key = {props.Key}>
        
    </div>
}

export default Tiny_circle
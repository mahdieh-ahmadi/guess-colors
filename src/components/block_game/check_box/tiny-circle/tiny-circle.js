import React from 'react'

import './tiny-circle.css'

const Tiny_circle = props => {
    return <div 
    style={{'backgroundColor' : `${props.bgcolor}`}} 
    className='tiny_circle'
    key = {props.Key}>
        {props.sign === 1 ? null : 
        (props.sign === 2 ? <span className='tick signs'> &#10004; </span> : 
        (props.sign === 4 ? <span className='mul signs'>&#10005;</span> : 
        <div className='gray_span'></div>))}
    </div>
}

export default Tiny_circle
import React from 'react'

import Tiny_circle from './tiny-circle/tiny-circle'

import './checkbox.css'

const CheckBox = () => {
    return <div className='checkbox'>
        <Tiny_circle bgcolor='white'/>
        <Tiny_circle bgcolor='white'/>
        <Tiny_circle bgcolor='white'/>
        <Tiny_circle bgcolor='white'/>
    </div>
}

export default CheckBox
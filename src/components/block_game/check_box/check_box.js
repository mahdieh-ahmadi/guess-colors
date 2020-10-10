import React from 'react'

import Tiny_circle from './tiny-circle/tiny-circle'

import './checkbox.css'

const CheckBox = () => {
    return <div className='checkbox'>
        <Tiny_circle bgcolor='white' key='first'/>
        <Tiny_circle bgcolor='white' key='second'/>
        <Tiny_circle bgcolor='white' key='tird'/>
        <Tiny_circle bgcolor='white' key='fourse'/>
    </div>
}

export default CheckBox
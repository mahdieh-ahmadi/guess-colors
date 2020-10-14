import React from 'react'

import TinyCircle from './tiny-circle/tiny-circle'

import './checkbox.css'

const CheckBox = props => {
    return <div className='checkbox' key={props.keyr}>
        <TinyCircle  Key = {'first'} bgcolor='white'/>
        <TinyCircle  Key = {'second'} bgcolor='white'/>
        <TinyCircle Key = {'tird'} bgcolor='white'/>
        <TinyCircle Key = {'fourse'} bgcolor='white' />
    </div>
}

export default CheckBox
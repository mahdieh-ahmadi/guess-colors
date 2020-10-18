import React from 'react'

import TinyCircle from './tiny-circle/tiny-circle'

import './checkbox.css'

const CheckBox = props => {
    return <div className='checkbox' key={props.keyr}>
        <TinyCircle  Key = {'first'} bgcolor='white' sign={props.sign1}/>
        <TinyCircle  Key = {'second'} bgcolor='white' sign={props.sign2}/>
        <TinyCircle Key = {'tird'} bgcolor='white' sign={props.sign3}/>
        <TinyCircle Key = {'fourse'} bgcolor='white' sign={props.sign4}/> 
    </div>
}

export default CheckBox
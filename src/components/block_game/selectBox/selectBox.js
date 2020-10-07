import React from 'react'

import Circle from '../circle/circle'
import './selectBox.css'

const SelectBox = () => {
    const colors = ['orange' , 'lightcoral' , 'lightgreen' , 'lightskyblue' , 'rgb(123, 0, 81)']

    return <div className='selectColor'>
        {colors.map(item => {
            return <Circle bgColor={item} key={item}/>
        })}
    </div>
}

export default SelectBox
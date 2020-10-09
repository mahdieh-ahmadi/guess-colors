import React from 'react'

import Circle from './circle/circle'
import CheckBox from './check_box/check_box'

import './block_game.css'

const BlockGame = props => {
    return<div className='blockGame' key={props.key}>
        <div className = 'blockGameColor'>
            <Circle bgColor='white' key='1'/>
            <Circle bgColor='white' key='2'/>
            <Circle bgColor='white' key='3'/>
            <Circle bgColor='white' key='4'/>
        </div>
        <div className = 'blockGameCheck'>
            <CheckBox />
        </div>
        
    </div>
}

export default BlockGame
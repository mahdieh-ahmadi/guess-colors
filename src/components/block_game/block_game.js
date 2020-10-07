import React from 'react'

import Circle from './circle/circle'

import './block_game.css'

const BlockGame = props => {
    return<div className='blockGame' key={props.key}>
        <Circle bgColor='white' key='1'/>
        <Circle bgColor='white' key='2'/>
        <Circle bgColor='white' key='3'/>
        <Circle bgColor='white' key='4'/>
    </div>
}

export default BlockGame
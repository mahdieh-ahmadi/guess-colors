import React from 'react'

import Circle from './circle/circle'

import './block_game.css'

const BlockGame = props => {
    return<div className='blockGame'>
        <Circle bgColor='white'/>
        <Circle bgColor='white'/>
        <Circle bgColor='white'/>
        <Circle bgColor='white'/>
    </div>
}

export default BlockGame
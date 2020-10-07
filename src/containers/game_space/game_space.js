import React from 'react'

import BlockGame from '../../components/block_game/block_game'
import SelectBox from '../../components/block_game/selectBox/selectBox'

import './game_space.css'

const Game = () => {
    let blocknumber = []
    for(let i = 1 ; i <= 10 ; i++){
        blocknumber.push( i)
    } 

    return <div className = 'main_game'>
        <div>
        {
            blocknumber.map(i => {
                return <BlockGame key={i}/>
            })
        }
        </div>
        <div className='select_color'>
            <SelectBox />
        </div>
        
    </div> 
}

export default Game
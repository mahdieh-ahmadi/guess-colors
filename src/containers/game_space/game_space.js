import React from 'react'

import BlockGame from '../../components/block_game/block_game'

const Game = () => {
    let blocknumber = []
    for(let i = 1 ; i < 10 ; i++){
        blocknumber.push( i)
    }
    console.log(blocknumber)
    return <div>
        <BlockGame />
        {
            blocknumber.map(item => {
                console.log(item)
                return <BlockGame />
            })
        }
    </div> 
}

export default Game
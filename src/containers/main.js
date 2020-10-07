import React from 'react'

import Header from './Header/header'
import GameSpace from './game_space/game_space'

import './main.css'

//eslint-disable-next-line

const Main = () => {
    return(<div className='main'>
        <Header />
        <GameSpace/>
    </div>)
}

export default Main
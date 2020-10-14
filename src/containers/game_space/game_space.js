import React from 'react'
import {connect} from 'react-redux'

import BlockGame from '../../components/block_game/block_game'
import SelectBox from '../../components/block_game/selectBox/selectBox'
/* import * as actions from '../../components/store/actions' */

import './game_space.css'

const Game = props => {

    return <div className = 'main_game'>
        <div>
        {
            props.checkstate.map(i => {
                return <BlockGame key={i + Math.random()} checkActive={i}/> 
            })
        }
        </div>
        <div className='select_color'>
            <SelectBox />
        </div>
        
    </div> 
}

const mapStateToProps = state => {return {
        checkstate : state.checkstate,
        layout : state.layout
    }
}

export default connect(mapStateToProps)(Game)
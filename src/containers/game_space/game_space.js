import React from 'react'
import {connect} from 'react-redux'

import BlockGame from '../../components/block_game/block_game'
import SelectBox from '../../components/block_game/selectBox/selectBox'
/* import * as actions from '../../components/store/actions' */

import './game_space.css'

const Game = props => {
    let counter = -1;
    let span 

    props.layout.length === 0 ? 
    span = <p>wait ...</p> : 
    span = <div className = 'main_game'>
            <div>
                {
                     props.checkstate.map(i => {
                    ++counter
                    return <BlockGame 
                    key={i + Math.random()} 
                    checkActive={i} 
                    bgcl1 = {props.layout[counter][0]}
                    bgcl2 = {props.layout[counter][1]}
                    bgcl3 = {props.layout[counter][2]}
                    bgcl4 = {props.layout[counter][3]}
                    counter={counter}
                    sign1={props.checkbox[counter][0]}
                    sign2={props.checkbox[counter][1]}
                    sign3={props.checkbox[counter][2]}
                    sign4={props.checkbox[counter][3]}/> 
                    })
                }
            </div>
            <div className='select_color'>
                <SelectBox />
            </div>
        </div> 

    return span
}

const mapStateToProps = state => {return {
        checkstate : state.checkstate,
        layout : state.layout,
        bgcolor : state.bgcolor,
        checkbox : state.checkbox
    }
}

export default connect(mapStateToProps)(Game)
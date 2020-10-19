import React, { useEffect } from 'react'

import Header from './Header/header'
import GameSpace from './game_space/game_space'
import * as actions from '../components/store/actions'
import Backdrop from '../components/hoc/backdrop/backddrop'

import './main.css'
import { connect } from 'react-redux'

//eslint-disable-next-line

const Main = props => {
    useEffect(() => {
        props.setLayout()
        props.setAnswer()
    },[])

    const reset = () => {
        props.reset();
        props.setLayout();
        props.setAnswer();
    }

    return(<div className='main'>
        { props.win !== 1 ? <Backdrop click={reset} content={
             props.win == 2 ? <div>
             you are win!
            </div> : 
            <div>
                you are lose!
            </div>
        }/>
         : null}
        <Header />
        <GameSpace/>
    </div>)
}

const mapStateToProps = state => {return{
    win : state.win
}}

const mapDispatchToProps = dispatch => {return{
    setLayout : () => dispatch({type : actions.setLayout}),
    setAnswer : () => dispatch ({type : actions.setAnswer}),
    reset : () => dispatch({type : actions.reset})
}}

export default connect(mapStateToProps,mapDispatchToProps)(Main)
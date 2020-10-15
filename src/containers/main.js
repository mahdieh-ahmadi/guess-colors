import React, { useEffect } from 'react'

import Header from './Header/header'
import GameSpace from './game_space/game_space'
import * as actions from '../components/store/actions'

import './main.css'
import { connect } from 'react-redux'

//eslint-disable-next-line

const Main = props => {
    useEffect(() => {
        props.setLayout()
        props.setAnswer()
    },[])

    return(<div className='main'>
        <Header />
        <GameSpace/>
    </div>)
}

const mapStateToProps = state => {return{

}}

const mapDispatchToProps = dispatch => {return{
    setLayout : () => dispatch({type : actions.setLayout}),
    setAnswer : () => dispatch ({type : actions.setAnswer})
}}

export default connect(mapStateToProps,mapDispatchToProps)(Main)
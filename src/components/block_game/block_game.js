import React from 'react'
import {connect} from 'react-redux'

import Circle from './circle/circle'
import CheckBox from './check_box/check_box'
import * as actions from './../store/actions'

import './block_game.css'

const BlockGame = props => {

    const changBack = (item , select) => {
        if(props.checkActive) {
            props.change_vectore( item, select , props.selectColor)} 
    }

    let checks = false
    if(props.bgcl1 !== 'white' && 
      props.bgcl2!== 'white' && 
      props.bgcl3 !== 'white' && 
      props.bgcl4 !== 'white'){
        checks = true
    }
    
    return<div className='blockGame' key={props.key} style={
        props.checkActive ? {'border' : '1px solid black'}: { }
    }>
        <div className = 'blockGameColor'>
            <Circle bgColor={props.bgcl1} key = {'first'} clicked={() => changBack(props.counter,0)}/>
            <Circle bgColor={props.bgcl2} key = {'second'} clicked={() => changBack(props.counter,1)}/>
            <Circle bgColor={props.bgcl3} key = {'tird'} clicked={() => changBack(props.counter,2)}/>
            <Circle bgColor={props.bgcl4} key = {'fourth'} clicked={() => changBack(props.counter,3)}/>
        </div>
        <div className = 'blockGameCheck'>
            <CheckBox 
            keyr={Math.random()} 
            sign1={props.sign1}
            sign2={props.sign2}
            sign3={props.sign3}
            sign4={props.sign4}/> 
        </div>
        <div className='check-block'>
            {checks ? <div className='check-mark' onClick={() => props.checkLayout(props.counter)}> &#10004; </div> : null}
        </div>
        
    </div>
}

const mapStateToProps = state => {
    return{
        selectColor : state.bgcolor,
        vectore_color : state.correctLayout,
    }
}

const mapdispatchToProps = dispatch => {return {
    change_vectore : (item , num , color) => dispatch({type : actions.change_vectore , select : num , color : color , item : item}),
    checkLayout : (num) => dispatch({type : actions.checkLayout , num : num})
}
}

export default connect(mapStateToProps , mapdispatchToProps)(BlockGame)
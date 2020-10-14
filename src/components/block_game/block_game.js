import React,{ useState } from 'react'
import {connect} from 'react-redux'

import Circle from './circle/circle'
import CheckBox from './check_box/check_box'
import * as actions from './../store/actions'

import './block_game.css'

const BlockGame = props => {

    const [backColor1,setBackColor1] = useState('white')
    const [backColor2,setBackColor2] = useState('white')
    const [backColor3,setBackColor3] = useState('white')
    const [backColor4,setBackColor4] = useState('white')


    const changBack = (select) => {
        switch (select) {
            case 'one':
                if(props.checkActive) {
                setBackColor1(props.selectColor)
                props.change_vectore(0 , props.selectColor)
                props.check()} 
                break;
            case 'two':
                if(props.checkActive){
                setBackColor2(props.selectColor)
                props.change_vectore(1 , props.selectColor )
                props.check()} 
                break;
            case 'tree':
                if(props.checkActive) {
                setBackColor3(props.selectColor)
                props.change_vectore(2 ,props.selectColor)
                props.check()} 
                break;
            case 'foure':
                if(props.checkActive)  {
                setBackColor4(props.selectColor)
                props.change_vectore(3 , props.selectColor)
                props.check()}
                break;
        
            default:
                break;
        }
    }

    let checks = false
    if(backColor1 !== 'white' && 
    backColor2 !== 'white' && 
    backColor3 !== 'white' && 
    backColor4 !== 'white'){
        checks = true
    }
    
    return<div className='blockGame' key={props.key} style={
        props.checkActive ? {'border' : '1px solid black'}: { }
    }>
        <div className = 'blockGameColor'>
            <Circle bgColor={backColor1} key = {'first'} clicked={() => changBack('one')}/>
            <Circle bgColor={backColor2} key = {'second'} clicked={() => changBack('two')}/>
            <Circle bgColor={backColor3} key = {'tird'} clicked={() => changBack('tree')}/>
            <Circle bgColor={backColor4} key = {'fourth'} clicked={() => changBack('foure')}/>
        </div>
        <div className = 'blockGameCheck'>
            <CheckBox keyr={Math.random()} />
        </div>
        <div className='check-block'>
            {checks ? <div className='check-mark'> &#10004; </div> : null}
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
    change_vectore : (num , color) => dispatch({type : actions.change_vectore , select : num , color : color}),
    check : () => dispatch({type : actions.check_block})
}
}

export default connect(mapStateToProps , mapdispatchToProps)(BlockGame)
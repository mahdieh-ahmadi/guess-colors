import React,{useState , useEffect} from 'react'
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
                setBackColor1(props.selectColor)
                props.change_vectore(0 , props.selectColor)
                props.check()
                /* props.rerender() */
                break;
            case 'two':
                setBackColor2(props.selectColor)
                props.change_vectore(1 , props.selectColor )
                props.check()
                /* props.rerender() */
                break;
            case 'tree':
                setBackColor3(props.selectColor)
                props.change_vectore(2 ,props.selectColor)
                props.check()
                /* props.rerender() */
                break;
            case 'foure':
                setBackColor4(props.selectColor)
                props.change_vectore(3 , props.selectColor)
                props.check()
                /* props.rerender() */
                break;
        
            default:
                break;
        }
    }


    return<div className='blockGame' key={props.key}>
        <div className = 'blockGameColor'>
            <Circle bgColor={backColor1} key='100' clicked={() => changBack('one')}/>
            <Circle bgColor={backColor2} key='2sf' clicked={() => changBack('two')}/>
            <Circle bgColor={backColor3} key='3wer' clicked={() => changBack('tree')}/>
            <Circle bgColor={backColor4} key='4fre' clicked={() => changBack('foure')}/>
        </div>
        <div className = 'blockGameCheck'>
            <CheckBox />
        </div>
        <div className='check-block'>
            {props.checks ? <div className='check-mark'> &#10004; </div> : null}
        </div>
        
    </div>
}

const mapStateToProps = state => {
    return{
        selectColor : state.bgcolor,
        vectore_color : state.correctLayout,
        checkk : state.check
    }
}

const mapdispatchToProps = dispatch => {return {
    change_vectore : (num , color) => dispatch({type : actions.change_vectore , select : num , color : color}),
    check : () => dispatch({type : actions.check_block})
}
}

export default connect(mapStateToProps , mapdispatchToProps)(BlockGame)
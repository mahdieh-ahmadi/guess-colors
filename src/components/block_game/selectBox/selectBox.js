import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../store/actions'

import Circle from '../circle/circle'
import './selectBox.css'

const SelectBox = props => {
   /*  const colors = ['orange' , 'lightcoral' , 'lightgreen' , 'lightskyblue' , 'rgb(123, 0, 81)'] */

    const change_bg_color  = (item) =>  {
        props.changeColor(item)
    }

    return <div className='selectColor'>
        {props.colors.map(item => {
            return <Circle 
            bgColor={item} 
            key={item} 
            clicked={() => change_bg_color(item)}
            style = {item === props.bgcolor }/>
        })}
    </div>
}

const mapStateToProps = state => {return{
    colors : state.colors,
    bgcolor : state.bgcolor
}}

const mapDispatchToProps = dispatch => {return {
    changeColor : (color) => dispatch({type : actions.Select_background_color , color : color})
}}

export default connect(mapStateToProps , mapDispatchToProps )(SelectBox)
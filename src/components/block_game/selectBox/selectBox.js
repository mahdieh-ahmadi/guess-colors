import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../store/actions'

import Circle from '../circle/circle'
import './selectBox.css'

const SelectBox = props => {
    const colors = ['orange' , 'lightcoral' , 'lightgreen' , 'lightskyblue' , 'rgb(123, 0, 81)']

    const change_bg_color  = (item) =>  {
        props.changeColor(item)
    }

    return <div className='selectColor'>
        {colors.map(item => {
            return <Circle bgColor={item} key={item} clicked={() => change_bg_color(item)}/>
        })}
    </div>
}



const mapDispatchToProps = dispatch => {return {
    changeColor : (color) => dispatch({type : actions.Select_background_color , color : color})
}}

export default connect(null , mapDispatchToProps )(SelectBox)
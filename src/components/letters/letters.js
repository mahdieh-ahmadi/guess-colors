import React from 'react'

import './letters.css'

const Letter = props => {
    return <div className = 'style_letters' style = {{"background" : `${props.bg_color}`}}>
        {props.symbol}
    </div>
}

export default Letter
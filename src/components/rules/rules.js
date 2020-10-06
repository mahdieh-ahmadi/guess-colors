import React from 'react'

import './rules.css'

const Rules = props => {
    return (<div className='rules'>
        <button onClick={props.click} className='rules_btn'>{props.title}</button>
        {props.show ?<span className='paragraph_rule'>
            Try to guess the pattern, in both order and color,
            within ten turns. After submitting a row, a small black peg is placed for each 
            code peg from the guess which is correct in both color and position. A white peg 
            indicates the existence of a correct color code peg placed in the wrong position. 
            More info on Wikipedia.
        </span> : null}
    </div>)
}

export default Rules
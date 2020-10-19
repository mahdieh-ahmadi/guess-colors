import React from 'react'

import './cards.css'

const Cards = props => {
    return <div className={`card ${props.class}`}>
        <h2>{props.content}</h2>
        <button className={`btn${props.class}`}>
            Continue
        </button>
    </div>
}

export default Cards
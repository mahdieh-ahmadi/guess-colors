import React from 'react'

import './backdrop.css'

const BackDrop = props => {
    return <div className='backdrop' onClick={props.click}>
        {props.content}
    </div>
}

export default BackDrop
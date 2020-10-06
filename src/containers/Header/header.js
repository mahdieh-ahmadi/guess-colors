import React,{useState} from 'react'

import Letter from '../../components/letters/letters'
import Rules from '../../components/rules/rules'

import './header.css'

const Header = () => {
    const [show , setShow] = useState(true) 

    const changeShow = () => {
        setShow(!show)
    }

    return <header>
        <div className='title_master'>
            <Letter symbol='M' bg_color='orange'/>
            <Letter symbol='A' bg_color='lightcoral'/>
            <Letter symbol='S' bg_color='lightgreen'/>
            <Letter symbol='T' bg_color='lightskyblue'/>
            <Letter symbol='E' bg_color='rgb(0, 122, 135)'/>
            <Letter symbol='R' bg_color='rgb(123, 0, 81)'/>
            <h1>mind</h1>
        </div>

        <Rules 
        show={show} 
        title={show ? 'Hide rules' : 'Show rules'}
        click={changeShow}/>

    </header>
}

export default Header
import React,{useState} from 'react'

import Letter from '../../components/letters/letters'
import Rules from '../../components/rules/rules'

import './header.css'

const Header = () => {
    const [show , setShow] = useState(false) 

    const changeShow = () => {
        setShow(!show)
    }

    return <header>
        <div className='title_master'>
            <Letter symbol='M' bg_color='orange' key='m'/>
            <Letter symbol='A' bg_color='lightcoral' key='a'/>
            <Letter symbol='S' bg_color='lightgreen' key='s'/>
            <Letter symbol='T' bg_color='lightskyblue' key='t'/>
            <Letter symbol='E' bg_color='rgb(0, 122, 135)' key='e'/>
            <Letter symbol='R' bg_color='rgb(123, 0, 81)' key='r'/>
            <h1>mind</h1>
        </div>

        <Rules 
        show={show} 
        title={show ? 'Hide rules' : 'Show rules'}
        click={changeShow}/>

    </header>
}

export default Header
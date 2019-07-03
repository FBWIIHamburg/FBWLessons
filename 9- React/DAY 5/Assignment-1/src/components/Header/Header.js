import React from 'react'
import logo from '../../DCIlogo.png'

import './Header.css'

const Header = props =>{
    return(
        <header className={'Header'}>
            <img src={logo} alt={'react logo'} />
            <a href="#">Home Page</a>  
        </header>
    )
}

export default Header;
import React from 'react'
import logo from './assets/gitradar-logo.svg';
import './navbar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <img src={logo} alt='Logo' className='navbar__logo'/>
                <a href='https://www.twitch.tv/' className='navbar__item'>Features</a>
                <a href='https://www.twitch.tv/' className='navbar__item'>Open Source</a>
            </div>
            <div className='navbar__right'>
                <button className='btn__log'>Login</button>
                <button className='btn__get'>Get Started</button>
            </div>
        </div>
    );
}

export default NavBar;
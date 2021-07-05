import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'; //style – это не зарезервированное слово. может быть любое

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.item}><NavLink to="/profile" className={style.link}>Profile</NavLink></li>
                <li className={style.item}><NavLink to="/dialogs" className={style.link}>Messages</NavLink></li>
                <li className={style.item}><NavLink to="/friends" className={`${style.link} ${style.active}`}>Friends</NavLink></li>
            </ul >
        </nav >
    )
}

export default NavBar;

import React from 'react';
import style from './Navbar.module.css'; //style – это не зарезервированное слово. может быть любое

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><a href="#!" className={style.item}>Profile</a></li>
                <li><a href="#!" className={style.item}>Messages</a></li>
                <li><a href="#!" className={`${style.item} ${style.active}`}>Friends</a></li>
            </ul >
        </nav >
    )
}

export default NavBar;

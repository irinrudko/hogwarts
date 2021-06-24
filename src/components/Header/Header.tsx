import React from 'react';
import style from './Header.module.css';


const Header = () => {
    return (
        <header className={style.header}>
            <img src='https://images.unsplash.com/photo-1587987501183-33e43fdde781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1006&q=80' />
        </header>
    )
}

export default Header;

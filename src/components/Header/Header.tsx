import React from 'react';
import style from './Header.module.css';


const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img className={style.ico} src="http://localhost:3000/logo.png" alt="" />
                <h1 className={style.title}>myNet</h1>
            </div>

            <div className={style.content}></div>
            <div className={style.content}></div>
        </header>
    )
}

export default Header;

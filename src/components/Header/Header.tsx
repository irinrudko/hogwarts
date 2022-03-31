import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import { OwnHeaderPropsType } from './HeaderContainer';


const Header: React.FC<OwnHeaderPropsType> = (props) => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>
                    <img className={style.ico} src="http://localhost:3000/logo.png" alt="" />
                    <h1 className={style.title}>myNet</h1>
                </div>
                <div className={style.loginBox}>
                    {
                        props.isAuth
                            ? props.login
                            : <NavLink to={'/login'}><span className={style.login}>Login</span></NavLink>
                    }
                </div>
            </div>

            <div className={style.content}></div>
            <div className={style.content}></div>
        </header>
    )
}

export default Header;

import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css' //style – это не зарезервированное слово. может быть любое

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.menu}>
                <NavLink to="/profile" className={`${style.link} ${style.active}`}>
                    <li className={style.item}>
                        <svg className={style.ico} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                clip-rule="evenodd"
                                d="M5 12.5H2L12 3.5L22 12.5H19V20.5H13V14.5H11V20.5H5V12.5ZM17 10.69L12 6.19L7 10.69V18.5H9V12.5H15V18.5H17V10.69Z"
                                fill="#4c2234"
                            />{' '}
                        </svg>
                        House
                    </li>
                </NavLink>
                <NavLink to="/dialogs" className={`${style.link} ${style.active}`}>
                    <li className={style.item}>
                        <svg className={style.ico} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 0H18C19.1 0 20 0.9 20 2V14C20 15.1 19.1 16 18 16H4L0 20V2C0 0.9 0.9 0 2 0ZM4 14H18V2H2V16L4 14Z"
                                fill="#4c2234"
                            />
                        </svg>
                        Owl Post
                    </li>
                </NavLink>
                <NavLink to="/friends" className={`${style.link} ${style.active}`}>
                    <li className={style.item}>
                        <svg className={style.ico} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z"
                                fill="#4c2234"
                            />
                            <path
                                d="M10.35 14.01C7.62 13.91 2 15.27 2 18V19C2 19.55 2.45 20 3 20H11.54C9.07 17.24 10.31 14.11 10.35 14.01Z"
                                fill="#4c2234"
                            />
                            <path
                                d="M19.43 18.02C19.9 17.22 20.13 16.25 19.91 15.2C19.57 13.56 18.19 12.25 16.53 12.04C13.9 11.7 11.68 13.91 12.03 16.54C12.25 18.2 13.55 19.58 15.19 19.92C16.24 20.14 17.21 19.91 18.01 19.44L19.87 21.3C20.26 21.69 20.89 21.69 21.28 21.3C21.67 20.91 21.67 20.28 21.28 19.89L19.43 18.02ZM16 18C14.9 18 14 17.1 14 16C14 14.9 14.9 14 16 14C17.1 14 18 14.9 18 16C18 17.1 17.1 18 16 18Z"
                                fill="#4c2234"
                            />
                        </svg>
                        Students
                    </li>
                </NavLink>
                <NavLink to="/users" className={`${style.link} ${style.active}`}>
                    <li className={style.item}>
                        <svg className={style.ico} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z"
                                fill="#4c2234"
                            />
                            <path
                                d="M10.35 14.01C7.62 13.91 2 15.27 2 18V19C2 19.55 2.45 20 3 20H11.54C9.07 17.24 10.31 14.11 10.35 14.01Z"
                                fill="#4c2234"
                            />
                            <path
                                d="M19.43 18.02C19.9 17.22 20.13 16.25 19.91 15.2C19.57 13.56 18.19 12.25 16.53 12.04C13.9 11.7 11.68 13.91 12.03 16.54C12.25 18.2 13.55 19.58 15.19 19.92C16.24 20.14 17.21 19.91 18.01 19.44L19.87 21.3C20.26 21.69 20.89 21.69 21.28 21.3C21.67 20.91 21.67 20.28 21.28 19.89L19.43 18.02ZM16 18C14.9 18 14 17.1 14 16C14 14.9 14.9 14 16 14C17.1 14 18 14.9 18 16C18 17.1 17.1 18 16 18Z"
                                fill="#4c2234"
                            />
                        </svg>
                        Wizards
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar

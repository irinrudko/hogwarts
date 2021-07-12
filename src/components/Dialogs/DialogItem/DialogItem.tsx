import { type } from 'os';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';

type DialogItemType = {
    name: string,
    id: string,
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.item}><NavLink to={path}>{props.name}</NavLink>
        </div >
    )
}

export default DialogItem;
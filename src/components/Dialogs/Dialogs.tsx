import { type } from 'os';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

type MessageType = {
    message: string,
}

const Message = (props: MessageType) => {
    return (
        <div className={style.item}>{props.message}</div>
    )
}

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

const Dialogs = (props: DialogItemType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.people}>
                <DialogItem name="Nastya" id="1" />
                <DialogItem name="Tanya" id="2" />
                <DialogItem name="Anna" id="3" />
                <DialogItem name="Mike" id="4" />
                <DialogItem name="Lena T" id="5" />
            </div>

            <div className={style.chats}>
                <Message message="Hi" />
                <Message message="How're you?" />
                <Message message="Check some pics of Lena" />
            </div>
        </div >
    )
}

export default Dialogs;
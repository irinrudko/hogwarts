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

let dialogsData = [
    { id: '1', name: "Nastya", },
    { id: '2', name: "Tanya", },
    { id: '3', name: "Anna", },
    { id: '4', name: "Mike", },
    { id: '5', name: "LenaT", },
]

let messagesData = [
    { id: '1', message: "hey", },
    { id: '2', message: "how're you?", },
    { id: '3', message: "Check some pics of Lena", },
]


const Dialogs = (props: DialogItemType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.people}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name="Anna" id="3" />
                <DialogItem name="Mike" id="4" />
                <DialogItem name="Lena T" id="5" />
            </div>

            <div className={style.chats}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div >
    )
}

export default Dialogs;
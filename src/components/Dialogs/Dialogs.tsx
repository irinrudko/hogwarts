import { type } from 'os';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

type MessageType = {
    message: string,
}

type DialogItemType = {
    name: string,
    id: string,
}

const Message = (props: MessageType) => {
    return (
        <div className={style.item}>{props.message}</div>
    )
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

let dialogsElements = dialogsData.map(dialog => (<div key={dialog.id}> <DialogItem name={dialog.name} id={dialog.id} /></div>))
let messagesElements = messagesData.map(el => <div key={el.id}><Message message={el.message} /></div>)


const Dialogs = (props: DialogItemType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.people}>{dialogsElements}</div>
            <div className={style.chats}>{messagesElements}</div>
        </div >
    )
}

export default Dialogs;
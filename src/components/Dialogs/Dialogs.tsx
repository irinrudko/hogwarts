import { type } from 'os';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// вынести в DialogItem.tsx
type DialogItemType = {
    name: string,
    id: string,
}

// вынести в Message.tsx

type MessageType = {
    message: string,
}
/////////////////////////////

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
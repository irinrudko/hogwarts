import { type } from 'os';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

type DialogItemType = {
    id: number
    name: string
}

type MessageItemType = {
    id: number
    message: string
}

type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
}

//id – string?? 


const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElements = props.dialogs.map(dialog => (<div key={dialog.id}> <DialogItem name={dialog.name} id={dialog.id} /></div>))
    let messagesElements = props.messages.map(el => <div key={el.id}><Message message={el.message} /></div>)
    return (
        <div className={style.dialogs}>
            <div className={style.people}>{dialogsElements}</div>
            <div className={style.chats}>{messagesElements}</div>
        </div >
    )
}

export default Dialogs;
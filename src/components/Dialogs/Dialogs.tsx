import React, { ChangeEvent } from 'react';
import style from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { ActionTypes, sendMessageAC, updateMessageAC } from '../../redux/redux';

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
    messageText: string
    sendMessage: (text: string) => void
    onChange: (text: string) => void
}


const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElements = props.dialogs.map(dialog => (<div key={dialog.id}> <DialogItem name={dialog.name} id={dialog.id} /></div>))
    let messagesElements = props.messages.map(el => <div key={el.id}><Message message={el.message} /></div>)


    const messageValue = props.messageText;
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(e.currentTarget.value)
    }
    const onSendMessageClick = () => {
        props.sendMessage(messageValue)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.people}>{dialogsElements}</div>
            <div className={style.chats}>
                <div>{messagesElements}
                    <div className={style.item}>
                        <textarea value={messageValue}
                            onChange={onChangeHandler}
                            placeholder='enter your message'>
                        </textarea>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dialogs;
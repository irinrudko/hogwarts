import React, { ChangeEvent } from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

type DialogItemType = {
    id: string
    name: string
}

type MessageItemType = {
    id: string
    message: string
}

type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    messageText: string
    sendMessage: (text: string) => void
    onChange: (text: string) => void
    isAuth: boolean
}

const Dialogs: React.FC<DialogsType> = ({ dialogs, messages, messageText, sendMessage, onChange, isAuth }) => {
    let dialogsElements = dialogs.map((dialog) => (
        <div key={dialog.id}>
            {' '}
            <DialogItem name={dialog.name} id={dialog.id} />
        </div>
    ))
    let messagesElements = messages.map((el) => (
        <div key={el.id}>
            <Message message={el.message} />
        </div>
    ))

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.currentTarget.value)
    }
    const onSendMessageClick = () => {
        sendMessage(messageText)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.people}>{dialogsElements}</div>
            <div className={style.chats}>
                <div>
                    {messagesElements}
                    <div className={style.item}>
                        <textarea value={messageText} onChange={onChangeHandler}></textarea>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

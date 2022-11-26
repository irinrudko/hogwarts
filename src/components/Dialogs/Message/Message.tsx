import React from 'react'
import style from './../Dialogs.module.css'

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return <div className={style.item}>{props.message}</div>
}

export default Message

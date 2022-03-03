import React, { ChangeEvent } from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { ActionTypes, sendMessageAC, updateMessageAC } from '../../redux/redux';
import Dialogs from './Dialogs';

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
    dispatch: (action: ActionTypes) => void
}


const DialogsContainer: React.FC<DialogsType> = (props) => {
    const onChangeHandler = (text: string) => {
        props.dispatch(updateMessageAC(text))
    }
    const sendMessage = (text: string) => {
        if (props.messageText.trim() !== '') {
            props.dispatch(sendMessageAC(text))
        } else {
            alert('Please write your message')
        }
    }

    return (
        <Dialogs sendMessage={sendMessage} messageText={props.messageText} onChange={onChangeHandler} dialogs={props.dialogs} messages={props.messages} />
    )
}

export default DialogsContainer;
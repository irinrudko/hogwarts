import React, { ChangeEvent } from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { ActionTypes, sendMessageAC, updateMessageAC } from '../../redux/redux';
import Dialogs from './Dialogs';
import { StoreContext } from '../../StoreContext';

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
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    const onChangeHandler = (text: string) => {
                        store.dispatch(updateMessageAC(text))
                    }
                    const sendMessage = (text: string) => {
                        if (props.messageText.trim() !== '') {
                            store.dispatch(sendMessageAC(text))
                        } else {
                            alert('Please write your message')
                        }
                    }

                    return (
                        <Dialogs sendMessage={sendMessage} messageText={state.dialogsPage.messageText} onChange={onChangeHandler} dialogs={state.dialogsPage.dialogsData} messages={state.dialogsPage.messagesData} placeholder={'enter your message'} />
                    )
                }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
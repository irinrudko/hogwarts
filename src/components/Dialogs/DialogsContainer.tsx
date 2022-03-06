import React, { ChangeEvent } from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { ActionTypes, sendMessageAC, updateMessageAC } from '../../redux/redux';
import Dialogs from './Dialogs';
import { StoreContext } from '../../StoreContext';



const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    const onChangeHandler = (text: string) => {
                        store.dispatch(updateMessageAC(text))
                    }
                    const sendMessage = (text: string) => {
                        if (state.dialogsPage.messageText.trim() !== '') {
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
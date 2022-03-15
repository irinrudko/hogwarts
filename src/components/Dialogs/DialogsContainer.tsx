import React from 'react';
import { ActionTypes, sendMessageAC, updateMessageAC } from '../../redux/redux';
import Dialogs from './Dialogs';
import { ReduxStateType } from '../../redux/redux-store';
import { connect } from 'react-redux';

let mapStateToProps = (state: ReduxStateType) => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData,
        messageText: state.dialogsPage.messageText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        sendMessage: (text: string) => {
            dispatch(sendMessageAC(text))
        },
        onChange: (text: string) => {
            dispatch(updateMessageAC(text))
        }
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
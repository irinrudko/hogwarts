import React from 'react';
import Dialogs from './Dialogs';
import { ReduxStateType } from '../../redux/redux-store';
import { connect } from 'react-redux';
import { DialogsActionTypes, sendMessageAC, updateMessageAC } from '../../redux/dialogs-reducer';

let mapStateToProps = (state: ReduxStateType) => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData,
        messageText: state.dialogsPage.messageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: (action: DialogsActionTypes) => void) => {
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
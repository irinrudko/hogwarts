import React from 'react';
import Dialogs from './Dialogs';
import { ReduxStateType } from '../../redux/redux-store';
import { connect } from 'react-redux';
import { DialogsActionTypes, sendMessageAC, updateMessageAC } from '../../redux/dialogs-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthReducer';

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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
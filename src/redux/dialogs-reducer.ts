import { ActionTypes, DialogPageType } from "./redux";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogsReducer = (state: DialogPageType, action: ActionTypes): DialogPageType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = { id: 6, message: action.messageText }
            state.messagesData.push(newMessage)
            state.messageText = ''

            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.messageText = action.messageBody;
            return state;


        default: return state
    }

}
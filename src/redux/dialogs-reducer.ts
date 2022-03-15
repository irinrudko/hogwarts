import { isDoStatement } from "typescript";
import { v1 } from "uuid";
import { ActionTypes, DialogPageType } from "./redux";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


const initialState: DialogPageType = {
    dialogsData: [
        { id: v1(), name: "Nastya", },
        { id: v1(), name: "Tanya", },
        { id: v1(), name: "Anna", },
        { id: v1(), name: "Mike", },
        { id: v1(), name: "Lena", },
    ],
    messagesData: [
        { id: v1(), message: "hey", },
        { id: v1(), message: "how're you?", },
        { id: v1(), message: "Check some pics of Lena", },
        { id: v1(), message: "Check it out dude", },
        { id: v1(), message: '', },
    ],
    messageText: '',
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes): DialogPageType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = { id: v1(), message: action.messageText }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                messageText: ''
            }
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                messageText: action.messageBody
            }

        default: return state
    }
}


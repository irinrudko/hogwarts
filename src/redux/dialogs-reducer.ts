import { v1 } from "uuid";

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

export const dialogsReducer = (state: DialogPageType = initialState, action: DialogsActionTypes): DialogPageType => {

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

export type DialogsActionTypes = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateMessageAC>

export const sendMessageAC = (messageText: string) => {
    return {
        type: SEND_MESSAGE,
        messageText: messageText
    } as const
}
export const updateMessageAC = (messageBody: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        messageBody: messageBody
    } as const
}

export type DialogPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    messageText: string
}
type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}
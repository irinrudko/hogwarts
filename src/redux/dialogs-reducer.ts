import { v1 } from 'uuid'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState: DialogPageType = {
    dialogsData: [
        { id: v1(), name: 'Pr McGonagall' },
        { id: v1(), name: 'Harry' },
        { id: v1(), name: 'Hermione' },
        { id: v1(), name: 'Snape' },
        { id: v1(), name: 'Pr Dumbledore' },
        { id: v1(), name: 'Sirius' },
        { id: v1(), name: 'Voldi' },
    ],
    messagesData: [
        { id: v1(), message: "Where's your homework, young lade?" },
        { id: v1(), message: "how're you?" },
        { id: v1(), message: 'You have to be kidding me' },
        { id: v1(), message: 'Check out a new picture of my cat' },
        {
            id: v1(),
            message: 'I would like to say a few words. And here they are: Nitwit! Blubber! Oddment! Tweak! Thank you!',
        },
        { id: v1(), message: '' },
        {
            id: v1(),
            message: 'Pitter told me you call me Voldi. Seriously dude? That is my name now? Have some respect! ',
        },
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
                messageText: '',
            }
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                messageText: action.messageBody,
            }

        default:
            return state
    }
}

export type DialogsActionTypes = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateMessageAC>

export const sendMessageAC = (messageText: string) => {
    return {
        type: SEND_MESSAGE,
        messageText: messageText,
    } as const
}
export const updateMessageAC = (messageBody: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        messageBody: messageBody,
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

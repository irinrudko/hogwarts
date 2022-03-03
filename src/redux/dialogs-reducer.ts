import { ActionTypes, DialogPageType } from "./redux";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


const initialState: DialogPageType = {
    dialogsData: [
        { id: 1, name: "Nastya", },
        { id: 2, name: "Tanya", },
        { id: 3, name: "Anna", },
        { id: 4, name: "Mike", },
        { id: 5, name: "Lena", },
    ],
    messagesData: [
        { id: 1, message: "hey", },
        { id: 2, message: "how're you?", },
        { id: 3, message: "Check some pics of Lena", },
        { id: 4, message: "Check it out dude", },
        { id: 5, message: '', },
    ],
    messageText: '',
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes): DialogPageType => {

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


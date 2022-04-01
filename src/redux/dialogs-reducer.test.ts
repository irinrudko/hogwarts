import { v1 } from "uuid"
import { dialogsReducer, DialogPageType } from "./dialogs-reducer"

test('correct message should be sent', () => {
    const startState: DialogPageType = {
        dialogsData: [
            { id: v1(), name: "Lena", },
            { id: v1(), name: "Dima", },
        ],
        messagesData: [
            { id: v1(), message: "hey", },
            { id: v1(), message: "how're you?", },
        ],
        messageText: '',
    }

    const newMessageText = 'hey, this is a new message!'

    const endState = dialogsReducer(startState, { type: 'SEND-MESSAGE', messageText: newMessageText })

    expect(endState.messagesData.length).toBe(3)
    expect(endState.messagesData[2].message).toBe(newMessageText)
})

test('message text for dialogs should be updated in State ', () => {
    const newMessageText = 'hey, this is a new message text!'

    const startState: DialogPageType = {
        dialogsData: [
            { id: v1(), name: "Lena", },
            { id: v1(), name: "Dima", },
        ],
        messagesData: [
            { id: v1(), message: "hey", },
            { id: v1(), message: "how're you?", },
        ],
        messageText: '',
    }

    const endState = dialogsReducer(startState, { type: 'UPDATE-NEW-MESSAGE-BODY', messageBody: newMessageText })
    expect(endState.messageText).toBe(newMessageText)
})

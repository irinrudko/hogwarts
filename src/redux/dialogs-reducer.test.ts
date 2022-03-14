import { v1 } from "uuid"
import { dialogsReducer } from "./dialogs-reducer"
import { DialogPageType } from "./redux"

test('correct message should be sent', () => {
    const startState: DialogPageType = {
        dialogsData: [
            { id: v1(), name: "Nastya", },
            { id: v1(), name: "Tanya", },
        ],
        messagesData: [
            { id: v1(), message: "hey", },
            { id: v1(), message: "how're you?", },
        ],
        messageText: '',
    }

    let newMessageText = 'hey, this is a new message!'

    const endState = dialogsReducer(startState, { type: 'SEND-MESSAGE', messageText: newMessageText })

    expect(endState.messagesData.length).toBe(3)
    expect(endState.messagesData[2].message).toBe(newMessageText)
})

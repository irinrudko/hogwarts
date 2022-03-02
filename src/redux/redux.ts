import { dialogsReducer } from "./dialogs-reducer"
import { profileReducer } from "./profile-reducer"

export type PostType = {
    id: number
    message: string
    likesCount: number
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    postText: string
    postsData: Array<PostType>
}
export type DialogPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    messageText: string
}

const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const addPostAC = (value: string) => {
    return {
        type: ADD_POST,
        postText: value
    } as const
}
export const changePostTextAC = (value: string) => {
    return {
        type: CHANGE_POST_TEXT,
        newText: value
    } as const
}


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

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changePostTextAC> | ReturnType<typeof sendMessageAC> | ReturnType<typeof updateMessageAC>


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    addPost: (postText: string) => void
    changePostText: (newText: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionTypes) => any
}


const store: StoreType = {
    _state: {
        profilePage: {
            postText: '',
            postsData: [
                { id: 1, message: "Hi, how're you?", likesCount: 15 },
                { id: 2, message: "Hey, it's my first post", likesCount: 20 },
                { id: 3, message: "Hey, it's my second post here", likesCount: 2 },
                { id: 4, message: "This is a mapped post", likesCount: 1000 },
            ],

        },
        dialogsPage: {
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
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state: RootStateType) {
        console.log('state was changed');
    },
    addPost(postText: string) {
        const newPost: PostType = { // типизируем объект сразу при создании
            id: 5,
            message: postText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.postText = '';
        this._callSubscriber(this._state);
    },
    changePostText(newText: string) {
        this._state.profilePage.postText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}


export default store;
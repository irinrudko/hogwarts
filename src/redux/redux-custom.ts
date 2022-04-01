import { v1 } from "uuid"
import { dialogsReducer } from "./dialogs-reducer"
import { profileReducer } from "./profile-reducer"


export type RootStateType = {
    // profilePage: ProfilePageType
    // dialogsPage: DialogPageType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    addPost: (postText: string) => void
    changePostText: (newText: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: any) => any
}


const store: any = {
    _state: {
        profilePage: {
            postText: '',
            postsData: [
                { id: v1(), message: "Hi, how're you?", likesCount: 15 },
                { id: v1(), message: "Hey, it's my first post", likesCount: 20 },
                { id: v1(), message: "Hey, it's my second post here", likesCount: 2 },
                { id: v1(), message: "This is a mapped post", likesCount: 1000 },
            ],
        },
        dialogsPage: {
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
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state: RootStateType) {
        console.log('state was changed');
    },
    addPost(postText: string) {
        const newPost: any = { // типизируем объект сразу при создании
            id: v1(),
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
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}


export default store;
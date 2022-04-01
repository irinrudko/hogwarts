import { v1 } from "uuid"
import { AuthActionTypes } from "./auth-reducer"
import { DialogsActionTypes, dialogsReducer } from "./dialogs-reducer"
import { ProfileActionTypes, profileReducer } from "./profile-reducer"
import { UsersActionTypes } from "./users-reducer"


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


export type UsersPageType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<number>
}
export type UserType = {
    name: string
    id: number
    photos: UserPhotoType
    status: string
    followed: boolean
}
type UserPhotoType = {
    small: string
    large: string
}

export type ProfilePageType = {
    postText: string
    postsData: Array<PostType>
    profile: UserProfileType
}
export type UserProfileType = {
    userId: number
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: {
        small: string
        large: string
    }
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}




export type AuthUserType = {
    messages: []
    data: UserDataType
    isAuth: boolean
}
export type UserDataType = {
    id: number
    email: string
    login: string
}



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
    dispatch: (action: any) => any
}

export type ActionTypes = ProfileActionTypes | DialogsActionTypes | UsersActionTypes | AuthActionTypes

const store: StoreType = {
    _state: {
        profilePage: {
            postText: '',
            postsData: [
                { id: v1(), message: "Hi, how're you?", likesCount: 15 },
                { id: v1(), message: "Hey, it's my first post", likesCount: 20 },
                { id: v1(), message: "Hey, it's my second post here", likesCount: 2 },
                { id: v1(), message: "This is a mapped post", likesCount: 1000 },
            ],
            //@ts-ignore
            profile: {}

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
        const newPost: PostType = { // типизируем объект сразу при создании
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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}


export default store;
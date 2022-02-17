type PostType = {
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
type ProfilePageType = {
    messageForNewPost: string
    postsData: Array<PostType>
    // addPost?: (post: PostType) => void
}
type DialogPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
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
}

const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
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
                { id: 5, message: "any news?", },
            ],
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
        this._state.profilePage.messageForNewPost = '';
        this._callSubscriber(this._state);
    },
    changePostText(newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },
}

export default store;
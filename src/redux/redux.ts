import { rerenderEntireTree } from "../render"

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


export let state: RootStateType = {
    profilePage: {
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
}

export let addPost = (postText: string) => {
    const newPost: PostType = { // типизируем объект сразу при создании
        id: 5,
        message: postText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export default state;
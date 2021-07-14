type PostType = {
    id: number
    message: string
    likeCounts: string
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
}
type DialogPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}


let state: RootStateType = {
    profilePage: {
        postsData: [
            { id: 1, message: "Hi, how're you?", likeCounts: "15" },
            { id: 2, message: "Hey, it's my first post", likeCounts: "20" },
            { id: 3, message: "Hey, it's my second post here", likeCounts: "2" },
            { id: 4, message: "This is a mapped post", likeCounts: "1000" },
        ],
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: "Nastya", },
            { id: 2, name: "Tanya", },
            { id: 3, name: "Anna", },
            { id: 4, name: "Mike", },
            { id: 5, name: "LenaT", },
        ],
        messagesData: [
            { id: 1, message: "hey", },
            { id: 2, message: "how're you?", },
            { id: 3, message: "Check some pics of Lena", },
        ],
    },
}

export default state;
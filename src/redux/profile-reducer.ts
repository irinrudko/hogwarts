import { v1 } from "uuid";
import { ActionTypes, PostType, ProfilePageType } from "./redux";
const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'


const initialState: ProfilePageType = {
    postText: '',
    postsData: [
        { id: v1(), message: "Hi, how're you?", likesCount: 15 },
        { id: v1(), message: "Hey, it's my first post", likesCount: 20 },
        { id: v1(), message: "Hey, it's my second post here", likesCount: 2 },
        { id: v1(), message: "This is a mapped post", likesCount: 1000 },
    ],
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                postText: ''
            }

        case CHANGE_POST_TEXT: {
            return {
                ...state,
                postText: action.newText
            }
        }

        default: return state
    }
}


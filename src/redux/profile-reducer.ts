import { v1 } from "uuid";
import { PostType, ProfilePageType } from "./redux";
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
    profile: {}
};

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes): ProfilePageType => {
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
        case 'SET-PROFILE-PAGE':
            return {
                ...state, profile: action.profile
            }
        default: return state
    }
}

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
export const setProfilePageAC = (profile: Object) => {
    return {
        type: 'SET-PROFILE-PAGE',
        profile
    } as const
}

export type ProfileActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changePostTextAC> | ReturnType<typeof setProfilePageAC>


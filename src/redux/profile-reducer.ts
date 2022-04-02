import { v1 } from "uuid";
import { usersAPI } from "./API/api";
import { AppThunk } from "./redux-store";
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
    profile: {
        userId: 2,
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        photos: {
            small: '',
            large: '',
        }
    },
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
                ...state, profile: { ...action.profile }
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
export const setProfilePageAC = (profile: UserProfileType) => {
    return {
        type: 'SET-PROFILE-PAGE',
        profile
    } as const
}

export type ProfileActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changePostTextAC> | ReturnType<typeof setProfilePageAC>



export const getProfilePage = (userId: string): AppThunk => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId).then(response => {
            dispatch(setProfilePageAC(response.data))
        })
    }
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

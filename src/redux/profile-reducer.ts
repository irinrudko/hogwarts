import React from "react";
import { ActionTypes, PostType, ProfilePageType } from "./redux";
const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'


const initialState: ProfilePageType = {
    postText: '',
    postsData: [
        { id: 1, message: "Hi, how're you?", likesCount: 15 },
        { id: 2, message: "Hey, it's my first post", likesCount: 20 },
        { id: 3, message: "Hey, it's my second post here", likesCount: 2 },
        { id: 4, message: "This is a mapped post", likesCount: 1000 },
    ],
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = { // типизируем объект сразу при создании
                id: 5,
                message: action.postText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.postText = '';
            return state;

        case CHANGE_POST_TEXT:
            state.postText = action.newText
            return state;

        default: return state
    }
}


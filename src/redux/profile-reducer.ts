import React from "react";
import { ActionTypes, PostType, ProfilePageType, RootStateType, StoreType } from "./redux";
const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'

export const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {
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


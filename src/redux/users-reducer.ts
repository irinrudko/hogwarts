import { v1 } from "uuid";
import { ActionTypes, UsersPageType, UserType } from "./redux";

const initialState: UsersPageType = {
    users: []
};

export const usersReducer = (state: UsersPageType = initialState, action: ActionTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW-USER':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId && u.followed === false) {

                        return { ...u, followed: true }
                    }
                    return u
                })
            }


        case 'UNFOLLOW-USER':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId && u.followed === true) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case 'SET-USERS':
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default: return state
    }
}
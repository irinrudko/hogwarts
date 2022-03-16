import { v1 } from "uuid";
import { ActionTypes, UsersPageType, UserType } from "./redux";

const initialState: UsersPageType = {
    users: [
        { name: "Shubert", id: 1, photos: { small: 'url', large: 'url' }, status: "That's not a dog name!!", followed: true },
        { name: "Beethoven", id: 2, photos: { small: 'url', large: 'url' }, status: 'Cannot hear anything', followed: false },
        { name: "Mozart", id: 3, photos: { small: 'url', large: 'url' }, status: 'Salieri seem to be a lovely guy', followed: true },
    ],
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
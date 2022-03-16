import { v1 } from "uuid";
import { ActionTypes, UsersPageType, UserType } from "./redux";

const initialState: UsersPageType = {
    users: [
        { name: "Shubert", id: 1, photos: { small: 'url', large: 'url' }, status: "That's not a dog name!!", followed: true },
        { name: "Beethoven", id: 1, photos: { small: 'url', large: 'url' }, status: 'Cannot hear anything', followed: false },
        { name: "Mozart", id: 1, photos: { small: 'url', large: 'url' }, status: 'Salieri seem to be a lovely guy', followed: true },
    ],
};

export const usersReducer = (state: UsersPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'FOLLOW-USER': {
            const user = state.users.map(u => {
                if (u.id === action.id) {
                    u.followed = true;
                }
            });
            return { ...state, user }
        }


        case 'UNFOLLOW-USER': {
            const user = state.users.map(u => {
                if (u.id === action.id) {
                    u.followed = false
                }
            })
            return { ...state, users: user }

        }

        default: return state
    }


}
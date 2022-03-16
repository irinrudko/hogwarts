import { v1 } from "uuid";
import { UsersPageType } from "./redux";

const initialState: UsersPageType = {

    people: [
        { name: "Shubert", id: 1, photos: { small: 'url', large: 'url' }, status: "That's not a dog name!!", followed: true },
        { name: "Beethoven", id: 1, photos: { small: 'url', large: 'url' }, status: 'Cannot hear anything', followed: false },
        { name: "Mozart", id: 1, photos: { small: 'url', large: 'url' }, status: 'Salieri seem to be a lovely guy', followed: true },

    ],
};

export const userReducer = (state: any = initialState, action: any) => {
    return state
}
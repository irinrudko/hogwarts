import { v1 } from "uuid";
import { UsersPageType } from "./redux";

const initialState: UsersPageType = {

    people: [
        { id: v1(), isSubscibed: false, name: 'Pavel', surname: 'Dobry', status: 'I am ok', location: { city: 'Minsk', country: 'Belarus' } },

    ],
};

export const userReducer = (state: any = initialState, action: any) => {
    return state
}
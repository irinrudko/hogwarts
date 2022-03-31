import { act } from "react-dom/test-utils"
import { UserDataType, AuthUserType } from "./redux"

const initialState: AuthUserType = {
    messages: [],
    data: {
        id: 2,
        email: 'blabla@bla.bla',
        login: 'samurai'
    },
    isAuth: false
}

export const authReducer = (state: AuthUserType = initialState, action: AuthActionTypes): AuthUserType => {

    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                data: { ...action.data },
                isAuth: true
            }
        default: return state
    }
}

export type AuthActionTypes = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: { id, email, login }
    } as const
}



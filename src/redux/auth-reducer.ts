import { authAPI } from './API/api'
import { AppThunk } from './redux-store'

const initialState: AuthUserType = {
    messages: [],
    data: {
        id: 2,
        email: 'blabla@bla.bla',
        login: 'samurai',
    },
    isAuth: false,
}

export const authReducer = (state: AuthUserType = initialState, action: AuthActionTypes): AuthUserType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                data: { ...action.data },
                isAuth: true,
            }
        default:
            return state
    }
}

export type AuthActionTypes = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: { id, email, login },
    } as const
}

export const authMe = (): AppThunk => {
    return (dispatch) => {
        authAPI.me().then((data) => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                dispatch(setUserDataAC(id, email, login))
            }
        })
    }
}

export type AuthUserType = {
    messages: []
    data: UserDataType
    isAuth: boolean
}
export type UserDataType = {
    id: number
    email: string
    login: string
}

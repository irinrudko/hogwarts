import { UsersPageType, UserType } from "./redux";

const initialState: UsersPageType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 3,
    currentPage: 1,
    isFetching: false
};

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionTypes): UsersPageType => {
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
        case 'SET-CURRENT-PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        default: return state
    }
}

export type UsersActionTypes = ReturnType<typeof followUserAC> | ReturnType<typeof unfollowUserAC> | ReturnType<typeof setUersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC> | ReturnType<typeof toggleIsFetchingAC>

export const followUserAC = (userId: number) => {
    return {
        type: 'FOLLOW-USER',
        userId: userId
    } as const
}
export const unfollowUserAC = (userId: number) => {
    return {
        type: 'UNFOLLOW-USER',
        userId: userId
    } as const
}
export const setUersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}
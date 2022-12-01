import { usersAPI } from '../API/usersAPI'
import { AppThunk } from './redux-store'

const initialState: UsersPageType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
    friends: [],
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionTypes): UsersPageType => {
    switch (action.type) {
        case 'SET-USERS':
            return {
                ...state,
                users: action.users,
            }
        case 'SET-FRIENDS':
            return {
                ...state,
                friends: [...action.friends],
            }
        case 'FOLLOW-USER':
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId && u.followed === false) {
                        return { ...u, followed: true }
                    }
                    return u
                }),
            }
        case 'UNFOLLOW-USER':
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId && u.followed === true) {
                        return { ...u, followed: false }
                    }
                    return u
                }),
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter((id) => id !== action.userId),
            }
        default:
            return state
    }
}

//Thunks
export const getUsersTH = (pageNumber: number, pageSize: number, term?: string, friend?: boolean): AppThunk => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        dispatch(setCurrentPageAC(pageNumber))

        usersAPI.getUsers(pageNumber, pageSize, term, friend).then((data) => {
            dispatch(setUsersAC(data.items))
            dispatch(setFriendsAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
            dispatch(toggleIsFetchingAC(false))
        })
    }
}
export const followUser = (userId: number): AppThunk => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(userId, true))

        usersAPI.followUser(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followUserAC(userId))
            }
            dispatch(toggleFollowingProgressAC(userId, false))
        })
    }
}
export const unfollowUser = (userId: number): AppThunk => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(userId, true))

        usersAPI.unfollowUser(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowUserAC(userId))
            }
            dispatch(toggleFollowingProgressAC(userId, false))
        })
    }
}
/////

//Action Creators
export const setUsersAC = (users: UserType[], friends?: UserType) => {
    return {
        type: 'SET-USERS',
        users,
        friends,
    } as const
}
export const setFriendsAC = (friends: UserType[]) => {
    return {
        type: 'SET-FRIENDS',
        friends,
    } as const
}
export const followUserAC = (userId: number) => {
    return {
        type: 'FOLLOW-USER',
        userId: userId,
    } as const
}
export const unfollowUserAC = (userId: number) => {
    return {
        type: 'UNFOLLOW-USER',
        userId: userId,
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount,
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching,
    } as const
}
export const toggleFollowingProgressAC = (userId: number, isFollowingInProgress: boolean) => {
    return {
        type: 'TOGGLE-FOLLOWING-PROGRESS',
        userId,
        isFollowingInProgress,
    } as const
}
/////

export type UsersPageType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<number>
    friends: Array<UserType>
}
export type UserType = {
    name: string
    id: number
    photos: UserPhotoType
    status: string
    followed: boolean
}
type UserPhotoType = {
    small: string
    large: string
}

export type UsersActionTypes =
    | ReturnType<typeof followUserAC>
    | ReturnType<typeof unfollowUserAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setFriendsAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>

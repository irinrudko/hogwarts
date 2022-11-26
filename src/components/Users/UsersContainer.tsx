import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ReduxStateType } from '../../redux/redux-store'
import {
    followUser,
    getUsersTH,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowingProgressAC,
    toggleIsFetchingAC,
    unfollowUser,
    UsersActionTypes,
    UserType,
} from '../../redux/users-reducer'
import { withAuthRedirect } from '../hoc/withAuthReducer'
import UsersAPI from './UsersAPI'

const mapStateToProps = (state: ReduxStateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionTypes | any) => void) => {
    return {
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleFollowingProgress: (userId: number, isFollowingInProgress: boolean) => {
            dispatch(toggleFollowingProgressAC(userId, isFollowingInProgress))
        },
        getUsers: (pageNumber: number, pageSize: number) => {
            dispatch(getUsersTH(pageNumber, pageSize))
        },
        followUser: (userId: number) => {
            dispatch(followUser(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowUser(userId))
        },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
    // withAuthRedirect
)(UsersAPI)

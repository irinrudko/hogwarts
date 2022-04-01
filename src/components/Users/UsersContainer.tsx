import React from "react";
import { connect } from "react-redux";
import { ReduxStateType } from "../../redux/redux-store";
import { followUserAC, getUsersTH, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowingProgressAC, toggleIsFetchingAC, unfollowUserAC, UsersActionTypes, UserType } from "../../redux/users-reducer";
import UsersAPI from "./UsersAPI";

const mapStateToProps = (state: ReduxStateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionTypes | any) => void) => {
    return {
        followUser: (userId: number) => {
            dispatch(followUserAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowUserAC(userId))
        },
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
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer;


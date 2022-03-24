import React from "react";
import { connect } from "react-redux";
import { UserType } from "../../redux/redux";
import { ReduxStateType } from "../../redux/redux-store";
import { followUserAC, setCurrentPageAC, setTotalUsersCountAC, setUersAC, toggleIsFetchingAC, unfollowUserAC, UsersActionTypes } from "../../redux/users-reducer";
import UsersAPI from "./UsersAPI";

const mapStateToProps = (state: ReduxStateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionTypes) => void) => {
    return {
        followUser: (userId: number) => {
            dispatch(followUserAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowUserAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetchingAC: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer;


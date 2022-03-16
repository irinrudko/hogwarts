import React from "react";
import { connect } from "react-redux";
import { ActionTypes, followUserAC, setUersAC, unfollowUserAC, UserType } from "../../redux/redux";
import { ReduxStateType } from "../../redux/redux-store";
import Users from "./Users";

const mapStateToProps = (state: ReduxStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        followUser: (userId: number) => {
            dispatch(followUserAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowUserAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUersAC(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;


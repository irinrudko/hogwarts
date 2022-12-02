import React from 'react'
import style from '../Users/Users.module.css'
import { Users } from './Users'
import { Preloader } from '../common/Preloader/Preloader'
import { UserType } from '../../redux/users-reducer'
import { Pagination } from '../Pagination/Pagination'

type UserAPIType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (userId: number, isFollowingInProgress: boolean) => void
    isFollowingInProgress: Array<number>
    isFetching: boolean
    getUsers: (pageNumber: number, pageSize: number) => void
    isAuth: boolean
}

class UsersAPI extends React.Component<UserAPIType> {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    getNewUsers = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render = () => {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : ''}
                <Pagination
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    getNewUsers={this.getNewUsers}
                />
                <Users
                    users={this.props.users}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                    isAuth={this.props.isAuth}
                />
                <Pagination
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    getNewUsers={this.getNewUsers}
                />
            </>
        )
    }
}

export default UsersAPI

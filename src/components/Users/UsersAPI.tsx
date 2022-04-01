import React from "react";
import style from '../Users/Users.module.css'
import { Users } from './Users';
import { Preloader } from "../common/Preloader/Preloader";
import { usersAPI } from "../../redux/API/api";
import { UserType } from "../../redux/users-reducer";

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
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersAPI extends React.Component<UserAPIType> {

    //TODO сделать норм пагинацию
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    };


    getNewUsers = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render = () => {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= 10; i++) {
            pages.push(i)
        }


        const mappedPages = pages.map(page => {
            return (<span className={this.props.currentPage === page ? style.currentPage : ''}
                onClick={(event) => this.getNewUsers(page)}

            >{page}</span>
            )
        })


        return <>
            {this.props.isFetching
                ? <Preloader />
                : ''}

            <Users pageNumbers={mappedPages}
                users={this.props.users}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                isFollowingInProgress={this.props.isFollowingInProgress} />
        </>

    }
}

export default UsersAPI;
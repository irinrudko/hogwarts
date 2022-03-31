import axios from "axios";
import React from "react";
import { UserType } from "../../redux/redux";
import style from '../Users/Users.module.css'
import { Users } from './Users';
import { Preloader } from "../common/Preloader/Preloader";

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
    toggleIsFetchingAC: (isFetching: boolean) => void
    isFetching: boolean
}

class UsersAPI extends React.Component<UserAPIType> {

    //TODO сделать норм пагинацию
    componentDidMount = () => {
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetchingAC(false)
        })
    }

    getNewUsers = (pageNumber: number) => {
        this.props.toggleIsFetchingAC(true)

        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetchingAC(false)
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
                unfollowUser={this.props.unfollowUser} />
        </>

    }
}

export default UsersAPI;
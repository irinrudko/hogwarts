import axios from "axios";
import React from "react";
import { UserType } from "../../redux/redux";
import style from '../Users/Users.module.css'
import { Users } from "./Users";

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
}

class UsersAPI extends React.Component<UserAPIType> {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    getNewUsers = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
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


        return (
            <Users pageNumbers={mappedPages}
                users={this.props.users}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser} />
        )
    }
}

export default UsersAPI;
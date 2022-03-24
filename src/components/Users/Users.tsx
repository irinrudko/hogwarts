import axios from "axios";
import React from "react";
import { UserType } from "../../redux/redux";
import userPhoto from "../../assets/images/avatar-male.png"
import style from '../Users/Users.module.css'

type UserPropsType = {
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

class User extends React.Component<UserPropsType> {

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


        let mappedPages = pages.map(page => {
            return (<span className={this.props.currentPage === page ? style.currentPage : ''}
                onClick={(event) => this.getNewUsers(page)}

            >{page}</span>
            )
        })


        return (<div>

            <div className={style.pageNumber}> {mappedPages} </div>

            {
                this.props.users.map(u => {

                    return <div key={u.id}>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar" width={"70px"} />
                            <h2>{u.name}</h2>
                            <span>{u.status}</span>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollowUser(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.followUser(u.id)}>Follow</button>}
                            </div>
                        </div>
                    </div>
                })
            }
        </div >)
    }
}

export default User;
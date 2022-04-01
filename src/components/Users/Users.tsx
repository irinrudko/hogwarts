import React from 'react';
import { UserType } from '../../redux/redux';
import style from '../Users/Users.module.css'
import userPhoto from '../../assets/icons/avatar-male.png'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../redux/API/api';


type UserPropsType = {
    pageNumbers: JSX.Element[]
    users: Array<UserType>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    toggleFollowingProgress: (userId: number, isFollowingInProgress: boolean) => void
    isFollowingInProgress: Array<number>
}


export class Users extends React.Component<UserPropsType> {

    render = () => {
        return <div>

            <div className={style.pageNumber}>
                {this.props.pageNumbers}
            </div>
            {
                this.props.users.map(u => {
                    return <div key={u.id}>
                        <div>
                            <NavLink to={'/profile/' + u.id} >
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar" width={"70px"} />
                            </NavLink>
                            <h2>{u.name}</h2>
                            <span> {u.status}</span>
                            <div>
                                {u.followed
                                    ? <button disabled={this.props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                        this.props.toggleFollowingProgress(u.id, true)
                                        usersAPI.unfollowUser(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                this.props.unfollowUser(u.id)
                                            }
                                            this.props.toggleFollowingProgress(u.id, false)
                                        })
                                    }

                                    }>Unfollow</button>
                                    : <button disabled={this.props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                        this.props.toggleFollowingProgress(u.id, true)

                                        usersAPI.followUser(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                this.props.followUser(u.id)
                                            }
                                            this.props.toggleFollowingProgress(u.id, false)
                                        })
                                    }
                                    }>Follow</button>}
                            </div>
                        </div>
                    </div>
                })
            }
        </div >
    }
}
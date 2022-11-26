import React from 'react'
import style from '../Users/Users.module.css'
import wizardAvatar from '../../assets/icons/avatar-wizard-male.jpeg'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../redux/users-reducer'

type UserPropsType = {
    pageNumbers: JSX.Element[]
    users: Array<UserType>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    toggleFollowingProgress: (userId: number, isFollowingInProgress: boolean) => void
    isFollowingInProgress: Array<number>
    isAuth: boolean
}

export class Users extends React.Component<UserPropsType> {
    render = () => {
        return (
            <div className={style.item}>
                <div className={style.pageNumber}>{this.props.pageNumbers}</div>
                {this.props.users.map((u) => {
                    return (
                        <div key={u.id}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img
                                        src={u.photos.small !== null ? u.photos.small : wizardAvatar}
                                        alt="avatar"
                                        width={'70px'}
                                    />
                                </NavLink>
                                <h2>{u.name}</h2>
                                <span>{u.status}</span>
                                <div>
                                    {u.followed ? (
                                        <button
                                            disabled={this.props.isFollowingInProgress.some((id) => id === u.id)}
                                            onClick={() => this.props.unfollowUser(u.id)}
                                        >
                                            Bring back home
                                        </button>
                                    ) : (
                                        <button
                                            disabled={this.props.isFollowingInProgress.some((id) => id === u.id)}
                                            onClick={() => this.props.followUser(u.id)}
                                        >
                                            Send to Hogwarts
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

import React from 'react';
import style from '../Users/Users.module.css'
import userPhoto from '../../assets/icons/avatar-male.png'
import { NavLink, Redirect } from 'react-router-dom';
import { UserType } from '../../redux/users-reducer';


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
        if (!this.props.isAuth) return <Redirect to={'/login'} />

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
                            <span>{u.status}</span>
                            <div>
                                {u.followed
                                    ? <button disabled={this.props.isFollowingInProgress.some(id => id === u.id)} onClick={
                                        () => this.props.unfollowUser(u.id)}>Unfollow</button>

                                    : <button disabled={this.props.isFollowingInProgress.some(id => id === u.id)} onClick={
                                        () => this.props.followUser(u.id)}>Follow</button>}
                            </div>
                        </div>
                    </div>
                })
            }
        </div >
    }
}
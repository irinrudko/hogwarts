import React from 'react';
import { UserType } from '../../redux/redux';
import style from '../Users/Users.module.css'
import userPhoto from '../../assets/icons/avatar-male.png'


type UserPropsType = {
    pageNumbers: JSX.Element[]
    users: Array<UserType>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}


export const Users: React.FC<UserPropsType> = (props) => {
    return (<div>

        <div className={style.pageNumber}>
            {props.pageNumbers}
        </div>
        {
            props.users.map(u => {

                return <div key={u.id}>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar" width={"70px"} />
                        <h2>{u.name}</h2>
                        <span>{u.status}</span>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
                                : <button onClick={() => props.followUser(u.id)}>Follow</button>}
                        </div>
                    </div>
                </div>
            })
        }
    </div >)

}
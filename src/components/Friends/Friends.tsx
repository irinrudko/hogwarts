import React from 'react'
import { useSelector } from 'react-redux'
import { compose } from 'redux'
import { ReduxStateType } from '../../redux/redux-store'
import { UserType } from '../../redux/users-reducer'
import { withAuthRedirect } from '../hoc/withAuthReducer'
import style from './Friends.module.css'
import avatar from '../../assets/icons/avatar-student.png'

const Friends = () => {
    const users = useSelector<ReduxStateType, UserType[]>((state) => state.usersPage.users)
    const myFriends = users.filter((user) => (user.followed ? user.name : null))

    return (
        <div className={style.item}>
            {myFriends.map((u) => {
                return (
                    <div key={u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : avatar} alt="avatar" width={'70px'} />
                        <span>{u.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default compose(withAuthRedirect)(Friends)

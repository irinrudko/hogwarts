import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import { ReduxStateType } from '../../redux/redux-store'
import { getUsersTH, UserType } from '../../redux/users-reducer'
import { withAuthRedirect } from '../hoc/withAuthReducer'
import style from './Friends.module.css'
import wizardAvatar from '../../assets/icons/avatar-wizard-male.jpeg'

const Friends = () => {
    const dispatch = useDispatch()
    const friends = useSelector<ReduxStateType, UserType[]>((state) => state.usersPage.friends)
    const users = useSelector<ReduxStateType, UserType[]>((state) => state.usersPage.users)
    const totalUsersCount = useSelector<ReduxStateType, number>((state) => state.usersPage.totalUsersCount)
    console.log(friends)
    console.log(users)

    useEffect(() => {
        dispatch(getUsersTH(1, 20, '', true))
    }, [])

    return (
        <div>
            <span>{totalUsersCount}</span>

            {friends &&
                friends.map((friend) => (
                    <>
                        <div key={friend.id}>
                            <img src={friend.photos.small ? friend.photos.small : wizardAvatar} width={'70px'} />
                            <span> {friend.name}</span>
                        </div>
                    </>
                ))}
        </div>
    )
}

export default Friends
// export default compose(withAuthRedirect)(Friends)

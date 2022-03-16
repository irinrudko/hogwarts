import axios from "axios";
import React from "react";
import { UserType } from "../../redux/redux";
import userPhoto from "../../assets/images/avatar-male.png"

type UserPropsType = {
    users: Array<UserType>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const Users: React.FC<UserPropsType> = ({ users, followUser, unfollowUser, setUsers }) => {

    if (users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            setUsers(response.data.items)
        })
    }

    return (<div>
        {
            users.map(u => {

                return <div key={u.id}>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar" width={"100px"} />
                        <h2>{u.name}</h2>
                        <span>{u.status}</span>
                        <div>
                            {u.followed
                                ? <button onClick={() => unfollowUser(u.id)}>Unfollow</button>
                                : <button onClick={() => followUser(u.id)}>Follow</button>}

                        </div>
                    </div>
                </div>
            })
        }
    </div>)
}

export default Users;
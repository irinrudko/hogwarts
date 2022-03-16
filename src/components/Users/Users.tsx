import React from "react";
import { UserType } from "../../redux/redux";

type UserPropsType = {
    users: Array<UserType>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

const Users: React.FC<UserPropsType> = ({ users, followUser, unfollowUser }) => {

    return (<div>
        {
            users.map(u => {

                return <div key={u.id}>
                    <div>
                        {/* <img src={u.photos.small} alt="pic" /> */}
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
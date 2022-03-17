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

class User extends React.Component<UserPropsType> {
    constructor(props: UserPropsType) {
        super(props);
        alert('NEW')

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {
        return (<div>
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
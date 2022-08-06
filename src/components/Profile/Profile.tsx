import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainter';
import { UserProfileType } from '../../redux/profile-reducer';


type ProfilePropsType = {
    profile: UserProfileType
    status: string
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <main className={style.profile}>
            <ProfileInfo profile={props.profile} status={props.status} />
            <MyPostsContainer />
        </main>
    )
}

export default Profile;
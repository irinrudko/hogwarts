import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainter';
import { UserProfileType } from '../../redux/redux';



type ProfilePropsType = {
    profile: UserProfileType
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <main className={style.profile}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </main>
    )
}

export default Profile;
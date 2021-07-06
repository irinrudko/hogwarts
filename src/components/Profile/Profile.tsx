import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <main className={style.profile}>
            <ProfileInfo />
            <MyPosts />
        </main>
    )
}

export default Profile;

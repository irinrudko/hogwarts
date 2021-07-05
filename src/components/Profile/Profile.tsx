import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const ProfilePic = () => {
    return (
        <>
            <div>
                <img src='https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80' />
            </div>

            <div>
                ava + descr
            </div>
        </>
    )
}

const Profile = () => {
    return (
        <main className={style.profile}>

            <ProfilePic />
            <MyPosts />
        </main>
    )
}

export default Profile;

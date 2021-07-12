import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    let postsData = [
        { id: '1', message: "Hi, how're you?", likeCounts: "15" },
        { id: '2', message: "Hey, it's my first post", likeCounts: "20" },
        { id: '3', message: "Hey, it's my second post here", likeCounts: "2" },
        { id: '4', message: "This is a mapped post", likeCounts: "1000" },
    ]

    return (
        <main className={style.profile}>
            <ProfileInfo />
            <MyPosts data={postsData} />
        </main>
    )
}

export default Profile;

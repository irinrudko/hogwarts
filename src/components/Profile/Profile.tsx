import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PostItem = {
    id: number
    message: string
    likesCount: string
}

type PostsData = {
    posts: Array<PostItem>
}

const Profile: React.FC<PostsData> = (props) => {
    return (
        <main className={style.profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </main>
    )
}

export default Profile;

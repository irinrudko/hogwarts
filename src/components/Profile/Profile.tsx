import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PostItem = {
    id: number
    message: string
    likesCount: number
}

type PostsData = {
    posts: Array<PostItem>
    addPost: (postText: string) => void
}

const Profile: React.FC<PostsData> = (props) => {
    return (
        <main className={style.profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} />
        </main>
    )
}

export default Profile;

import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ActionTypes } from '../../redux/redux';
import MyPostsContainer from './MyPosts/MyPostsContainter';

type PostItem = {
    id: number
    message: string
    likesCount: number
}

type PostsData = {
    posts: Array<PostItem>
    textPost: string
    dispatch: (action: ActionTypes) => void
}


const Profile: React.FC<PostsData> = (props) => {
    return (
        <main className={style.profile}>
            <ProfileInfo />
            <MyPostsContainer posts={props.posts} textPost={props.textPost} dispatch={props.dispatch} />
        </main>
    )
}

export default Profile;
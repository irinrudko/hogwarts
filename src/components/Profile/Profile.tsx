import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ActionTypes } from '../../redux/redux';

type PostItem = {
    id: number
    message: string
    likesCount: number
}

type PostsData = {
    posts: Array<PostItem>
    // addPost: (postText: string) => void
    // changePostText: (messageForNewPost: string) => void
    textPost: string
    dispatch: (action: ActionTypes) => any
}


const Profile: React.FC<PostsData> = (props) => {
    return (
        <main className={style.profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts} textPost={props.textPost} dispatch={props.dispatch} />
        </main>
    )
}

export default Profile;
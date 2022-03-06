import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import store, { ActionTypes } from '../../redux/redux';
import MyPostsContainer from './MyPosts/MyPostsContainter';
import { Store } from 'redux';
import { ReduxStateType } from '../../redux/redux-store';

type PostItem = {
    id: number
    message: string
    likesCount: number
}

type PostsData = {
    posts: Array<PostItem>
    textPost: string
    dispatch: (action: ActionTypes) => void
    store: Store<ReduxStateType, ActionTypes>

}


const Profile: React.FC<PostsData> = () => {
    return (
        <main className={style.profile}>
            <ProfileInfo />
            <MyPostsContainer />
        </main>
    )
}

export default Profile;
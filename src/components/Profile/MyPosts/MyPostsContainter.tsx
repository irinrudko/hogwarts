import React, { ChangeEvent } from 'react';
import { ActionTypes, addPostAC, changePostTextAC } from '../../../redux/redux';
import { ReduxStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

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

const MyPostsContainer = (props: PostsData) => {

    let addPost = (textPost: string) => {
        if (props.textPost.trim() !== '') {
            props.dispatch(addPostAC(textPost))
        } else {
            alert('Please write your comment')
        }
    }

    const onChangeHandler = (text: string) => {
        props.dispatch(changePostTextAC(text))
    }

    return (
        <MyPosts addPost={addPost} textPost={props.textPost} changePostText={onChangeHandler} posts={props.posts} />
    )
}

export default MyPostsContainer;

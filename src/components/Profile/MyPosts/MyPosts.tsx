import React, { ChangeEvent, LegacyRef } from 'react';
import { ActionTypes } from '../../../redux/redux';
import style from './MyPosts.module.css';
import Post from './Post/Post';

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

const MyPosts = (props: PostsData) => {
    let postsElements = props.posts.map(post => <div key={post.id}> <Post message={post.message} likesCount={post.likesCount} /></div>)

    let addPost = () => {
        if (props.textPost.trim() !== '') {
            props.dispatch({ type: 'ADD-POST', postText: props.textPost })
        } else {
            alert('Please write your comment')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({ type: 'CHANGE-POST-TEXT', newText: e.currentTarget.value })
    }


    return (
        <div>
            <div className={style.item}>
                <textarea value={props.textPost} onChange={onChangeHandler} className={style.field}></textarea>
                <button onClick={addPost} className={style.button}>add post</button>
            </div>
            <div className={style.post}>{postsElements}</div>
        </div >
    )
}

export default MyPosts;

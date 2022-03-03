import React, { ChangeEvent, LegacyRef } from 'react';
import { ActionTypes, addPostAC, changePostTextAC } from '../../../redux/redux';
import style from './MyPosts.module.css';
import Post from './Post/Post';

type PostItem = {
    id: number
    message: string
    likesCount: number
}

type PostsData = {
    addPost: (textPost: string) => void
    changePostText: (text: string) => void
    textPost: string
    posts: Array<PostItem>
}

const MyPosts = (props: PostsData) => {
    let postsElements = props.posts.map(post => <div key={post.id}> <Post message={post.message} likesCount={post.likesCount} /></div>)

    let addPost = () => {
        props.addPost(props.textPost)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.changePostText(text)
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

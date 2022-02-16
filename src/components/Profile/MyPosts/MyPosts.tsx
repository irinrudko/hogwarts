import React, { ChangeEvent, LegacyRef } from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

type PostItem = {
    id: number
    message: string
    likesCount: number
}

type PostsData = {
    posts: Array<PostItem>
    addPost: (postText: string) => void
    changePostText: (messageForNewPost: string) => void
    textPost: string
}

const MyPosts = (props: PostsData) => {
    let postsElements = props.posts.map(post => <div key={post.id}> <Post message={post.message} likesCount={post.likesCount} /></div>)

    let addPost = () => {
        props.addPost(props.textPost)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
    }


    return (
        <div>
            <div className={style.item}></div>
            <textarea value={props.textPost} onChange={onChangeHandler} className={style.textarea}></textarea>
            <button onClick={addPost}>add post</button>
            <div>{postsElements}</div>
        </div >
    )
}

export default MyPosts;

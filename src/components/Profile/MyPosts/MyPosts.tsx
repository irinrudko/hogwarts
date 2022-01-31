import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

type PostItem = {
    id: number
    message: string
    likesCount: string
}

type PostsData = {
    posts: Array<PostItem>
}

const MyPosts = (props: PostsData) => {
    let postsElements = props.posts.map(post => <div key={post.id}> <Post message={post.message} likesCount={post.likesCount} /></div>)

    return (
        <div>
            <div className={style.item}></div>
            <textarea className={style.textarea}></textarea>
            <button>add post</button>
            <div>{postsElements}</div>
        </div>
    )
}

export default MyPosts;

import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

type PostItem = {
    id: string
    message: string
    likeCounts: string
}

type PostsData = {
    data: Array<PostItem>
}

const MyPosts = (props: PostsData) => {
    let postsElements = props.data.map(post => <div key={post.id}> <Post message={post.message} likeCounts={post.likeCounts} /></div>)

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

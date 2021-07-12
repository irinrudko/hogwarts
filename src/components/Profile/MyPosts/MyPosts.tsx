import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    { id: '1', message: "Hi, how're you?", likeCounts: "15" },
    { id: '2', message: "Hey, it's my first post", likeCounts: "20" },
    { id: '3', message: "Hey, it's my second post here", likeCounts: "2" },
    { id: '4', message: "This is a mapped post", likeCounts: "1000" },
]

// type postsData = {
//     id?: string,
//     message: string,
//     likeConts: string,
// }

let postsElements = postsData.map(post => <div key={post.id}> <Post message={post.message} likeCounts={post.likeCounts} /></div>)


const MyPosts = () => {
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

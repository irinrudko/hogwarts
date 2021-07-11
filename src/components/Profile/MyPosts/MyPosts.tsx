import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

let postsData = [
    { id: '1', message: "Hi, how're you?", likeCounts: "15" },
    { id: '2', message: "Hey, it's my first post", likeCounts: "20" },
    { id: '3', message: "Hey, it's my second post here", likeCounts: "2" },
]

// type postsData = {
//     id?: string,
//     message: string,
//     likeConts: string,
// }


const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <Post message={postsData[0].message} likeCounts={postsData[0].likeCounts} />
            <Post message={postsData[1].message} likeCounts={postsData[1].likeCounts} />
        </div>
    )
}

export default MyPosts;

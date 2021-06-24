import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            <Post message="Hi, how're you?" likeCounts="15" />
            <Post message="Hey, it's my first post" likeCounts="20" />
        </div>
    )
}

export default MyPosts;

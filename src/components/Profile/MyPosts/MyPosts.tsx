import React, { LegacyRef } from 'react';
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
}

const MyPosts = (props: PostsData) => {
    let postsElements = props.posts.map(post => <div key={post.id}> <Post message={post.message} likesCount={post.likesCount} /></div>)


    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        // if (postMessageRef.current !== null) {
        //     alert(postMessageRef.current.value);
        // }

        //равно
        // alert(postMessageRef.current?.value);
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value);
            postMessageRef.current.value = '';
        }
    }

    return (
        <div>
            <div className={style.item}></div>
            <textarea ref={postMessageRef} className={style.textarea}></textarea>
            <button onClick={addPost}>add post</button>
            <div>{postsElements}</div>
        </div >
    )
}

export default MyPosts;

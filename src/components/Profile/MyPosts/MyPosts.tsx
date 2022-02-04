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
        if (postMessageRef.current) { //if current === true (существует и не undefined), то следующее:
            props.addPost(postMessageRef.current.value); //то прочитай и добавь value из textarea
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

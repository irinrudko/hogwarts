import React, { ChangeEvent, LegacyRef } from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

type PostItem = {
    id: string
    message: string
    likesCount: number
}

type PostsData = {
    addPost: (textPost: string) => void
    changePostText: (text: string) => void
    textPost: string
    posts: Array<PostItem>
}

const MyPosts: React.FC<PostsData> = ({ addPost, changePostText, textPost, posts }) => {
    let postsElements = posts.map(post => <div key={post.id}> <Post message={post.message} likesCount={post.likesCount} /></div>)

    let onAddPost = () => {
        addPost(textPost)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        changePostText(text)
    }

    return (
        <div>
            <div className={style.item}>
                <textarea value={textPost} onChange={onChangeHandler} className={style.field}></textarea>
                <button onClick={onAddPost} className={style.button}>add post</button>
            </div>
            <div className={style.post}>{postsElements}</div>
        </div >
    )
}

export default MyPosts;

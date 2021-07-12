import React from 'react';
import style from './Post.module.css';

type PostType = {
    message?: string,
    likeCounts?: string,
}


const Post: React.FC<PostType> = (props) => {
    return (
        <div className={style.item}>
            <img src='https://s6.cdn.teleprogramma.pro/wp-content/uploads/2020/01/e187d44f997b399185adaf352cc17b83.jpg' alt="avatar" />
            {props.message}
            <div>
                <span>like: {props.likeCounts}</span>
            </div>
        </div>
    )
}

export default Post;

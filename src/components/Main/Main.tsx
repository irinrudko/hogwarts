import React from 'react';
import style from './Main.module.css';
import MyPosts from './MyPosts/MyPosts';


const Main = () => {
    return (
        <main className={style.main}>
            <div>
                <img src='https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80' />
            </div>

            <div>
                ava + descr
            </div>

            <MyPosts />
        </main>
    )
}

export default Main;

import React, { ChangeEvent } from 'react';
import { ActionTypes, addPostAC, changePostTextAC } from '../../../redux/redux';
import { ReduxStateType } from '../../../redux/redux-store';
import { StoreContext } from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    let addPost = (textPost: string) => {
                        if (state.profilePage.postText.trim() !== '') {
                            store.dispatch(addPostAC(textPost))
                        } else {
                            alert('Please write your comment')
                        }
                    }

                    const onChangeHandler = (text: string) => {
                        store.dispatch(changePostTextAC(text))
                    }

                    return (
                        <MyPosts addPost={addPost} textPost={state.profilePage.postText} changePostText={onChangeHandler} posts={state.profilePage.postsData} />
                    )
                }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;

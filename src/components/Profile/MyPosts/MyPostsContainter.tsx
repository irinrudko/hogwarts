import React from 'react';
import { connect } from 'react-redux';
import { ActionTypes, addPostAC, changePostTextAC } from '../../../redux/redux';
import { ReduxStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';


const mapStateToProps = (state: ReduxStateType) => {
    return {
        textPost: state.profilePage.postText,
        posts: state.profilePage.postsData
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        addPost: (textPost: string) => {
            dispatch(addPostAC(textPost))
        },
        changePostText: (text: string) => {
            dispatch(changePostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;

